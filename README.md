# 👻 AutoSwitchStatus — a Vencord plugin

**[العربية](README.ar.md)**

Be **invisible automatically when you're not in a call**, and switch back to **online** the moment you join one. No more forgetting to change your status.

## How it works

| You are… | Your status becomes |
|---|---|
| In a voice channel, DM call or group call | **Online** *(configurable)* |
| Not in any call | **Invisible** *(configurable)* |

- Switches the instant you join, leave, or move between calls.
- Also checks when Discord starts, so you're never left showing the wrong status.
- Only changes your status when it actually needs to.

## Settings

Open **Settings → Vencord → Plugins → AutoSwitchStatus** (⚙️) to choose:

- **Status in call**: Online, Idle, Do Not Disturb or Invisible (default: **Online**)
- **Status outside call**: Online, Idle, Do Not Disturb or Invisible (default: **Invisible**)

For example, set *in call → Do Not Disturb* and *outside call → Online* to go DND only while talking.

## Install

User plugins require Vencord built from source. The included installer does all of it for you on Windows, and no coding is needed:

1. [Download the latest release](../../releases/latest) and unzip it.
2. Double-click **`install.bat`**. It installs Git / Node.js / pnpm if they're missing, downloads Vencord, adds the plugin, builds it, and patches Discord.
3. Fully quit Discord (right-click the tray icon near the clock → **Quit**) and reopen it.
4. Go to **Settings → Vencord → Plugins**, search **AutoSwitchStatus**, and turn it on.

Already have a Vencord source folder? Run:

```powershell
.\install.ps1 -VencordDir D:\Vencord
```

### Manual install

Copy the `autoSwitchStatus` folder into `Vencord/src/userplugins/`, then run `pnpm build` (and `pnpm inject` once). See Vencord's [guide to installing custom plugins](https://docs.vencord.dev/installing/custom-plugins/).

## Notes

- Changing your status by hand still works, but the plugin will set it again the next time you join or leave a call.
- If a Discord update removes Vencord, just run `install.bat` again.

## See also

- [FriendsInVoice](https://github.com/mPhpMaster/FriendsInVoice): a full page showing which voice rooms your friends are in, who's with them, and one-click join.

## License

GPL-3.0-or-later, same as Vencord.
