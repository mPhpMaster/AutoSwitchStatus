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

> AutoSwitchStatus is a plugin for **[Vencord](https://vencord.dev)** ([GitHub](https://github.com/Vendicated/Vencord)). Custom plugins can't be added to the regular Vencord download; Vencord has to be built from source on your PC. The installer below does all of that for you on Windows, and no coding is needed.

**What you need:** Windows 10/11 and the Discord desktop app ([download Discord](https://discord.com/download)). Log in to Discord at least once before installing.

1. **Download the plugin.** Go to the [latest release](../../releases/latest) and download `AutoSwitchStatus-vX.Y.Z.zip`.
2. **Unzip it.** Right-click the zip → **Extract All…** → **Extract**.
3. **Run the installer.** Double-click **`install.bat`**. If Windows shows "Windows protected your PC", click **More info → Run anyway**. The installer:
   - installs **Git**, **Node.js** and **pnpm** if they're missing (click **Yes** on any Windows permission prompts),
   - downloads **Vencord** to `%USERPROFILE%\Vencord` and builds it (a few minutes the first time),
   - adds the AutoSwitchStatus plugin,
   - patches Discord so it loads Vencord,
   - asks to restart Discord. Answer **Y**.

   Already have Vencord built from source? The installer finds it automatically and only adds the plugin.
4. **Turn the plugin on.** In Discord: **User Settings** (⚙️ next to your name) → **Vencord** → **Plugins**, search **AutoSwitchStatus** and switch it **on**.

### macOS and Linux

1. **Download and unzip** the [latest release](../../releases/latest) (double-click the zip on a Mac).
2. **Run the installer**:
   - **Mac or Linux, from Terminal (recommended):** type `bash ` (with a space), drag **`install.sh`** into the Terminal window, and press Enter. This works on every macOS version without security prompts.
   - **Mac, double-click:** double-click **`install.command`**. The first time, macOS blocks files from unidentified developers. On macOS 15 (Sequoia) and later, open **System Settings → Privacy & Security**, scroll down and click **Open Anyway**; on older versions, right-click the file → **Open** → **Open**.

   It does the same as the Windows installer: installs **Git** (Mac: Apple's Command Line Tools), **Node.js** (Mac: offers to install [Homebrew](https://brew.sh) for it) and **pnpm** if they're missing, downloads and builds **Vencord** in `~/Vencord` (or finds the one you already have), adds AutoSwitchStatus, patches Discord and offers to restart it. If AutoSwitchStatus is already installed, it asks whether to uninstall or update it.
3. **Turn the plugin on**: in Discord, **User Settings** → **Vencord** → **Plugins**, search **AutoSwitchStatus** and switch it **on**.

If patching Discord fails on a Mac, open **System Settings → Privacy & Security → App Management**, turn on **Terminal**, and run the installer again.

Options work the same way: `bash install.sh --vencord-dir ~/Vencord`, `--branch ptb` (or `canary`), `--detect-only`.

### Windows installer options

Run from a terminal opened in the unzipped folder:

```powershell
.\install.bat                          # same as double-clicking it
.\install.bat -VencordDir D:\Vencord   # use (or create) Vencord in this folder
.\install.bat -Branch ptb              # Discord PTB (or: canary)
.\install.bat -DetectOnly              # only show what's installed, change nothing
```

### Update

Download the new release, unzip it and run `install.bat` again (Mac/Linux: `install.command` or `install.sh`). It will say AutoSwitchStatus is already installed and ask whether to uninstall it. Answer **N**, then **Y** to update.

### Uninstall

Run `install.bat` (Mac/Linux: `install.command` or `install.sh`) and answer **Y** when it asks whether to uninstall AutoSwitchStatus. Only the plugin is removed; Vencord stays installed.

### Manual install

Copy the `autoSwitchStatus` folder into `Vencord/src/userplugins/`, then run `pnpm build` (and `pnpm inject` once). See Vencord's [guide to installing custom plugins](https://docs.vencord.dev/installing/custom-plugins/).

## Notes

- Changing your status by hand still works, but the plugin will set it again the next time you join or leave a call.
- If a Discord update removes Vencord, just run `install.bat` again.

## See also

- [FriendsInVoice](https://github.com/mPhpMaster/FriendsInVoice): a full page showing which voice rooms your friends are in, who's with them, and one-click join.

## License

GPL-3.0-or-later, same as Vencord.
