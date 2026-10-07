/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import definePlugin, { OptionType } from "@utils/types";
import { SelectedChannelStore, UserStore } from "@webpack/common";

const StatusSettings = getUserSettingLazy<string>("status", "status")!;

const statusOptions = (defaultValue: string) => [
    { label: "Online", value: "online", default: defaultValue === "online" },
    { label: "Idle", value: "idle", default: defaultValue === "idle" },
    { label: "Do Not Disturb", value: "dnd", default: defaultValue === "dnd" },
    { label: "Invisible", value: "invisible", default: defaultValue === "invisible" },
];

const settings = definePluginSettings({
    statusInCall: {
        type: OptionType.SELECT,
        description: "Status to use while you are in a call or voice channel",
        options: statusOptions("online"),
    },
    statusOutsideCall: {
        type: OptionType.SELECT,
        description: "Status to use when you are not in a call",
        options: statusOptions("invisible"),
    },
});

interface VoiceState {
    userId: string;
    channelId?: string | null;
}

async function applyStatus(inCall: boolean) {
    const wanted = inCall ? settings.store.statusInCall : settings.store.statusOutsideCall;
    if (StatusSettings.getSetting() !== wanted) {
        await StatusSettings.updateSetting(wanted);
    }
}

export default definePlugin({
    name: "AutoSwitchStatus",
    description: "Automatically goes invisible when you are not in a call, and back online when you join one",
    authors: [{ name: "mPhpMaster", id: 0n }],
    dependencies: ["UserSettingsAPI"],
    settings,

    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            const myId = UserStore.getCurrentUser()?.id;
            const mine = voiceStates.find(s => s.userId === myId);
            if (!mine) return;

            applyStatus(!!mine.channelId);
        },
    },

    start() {
        applyStatus(!!SelectedChannelStore.getVoiceChannelId());
    },
});
