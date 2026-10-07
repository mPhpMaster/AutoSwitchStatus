<div dir="rtl">

# 👻 AutoSwitchStatus — إضافة لـ Vencord

**[English](README.md)**

بتخليك **مخفي (Invisible) تلقائياً لما ما تكون بمكالمة**، وبترجعك **أونلاين** أول ما تدخل مكالمة. ما عاد تنسى تغيّر حالتك.

## كيف بتشتغل

| إنت… | حالتك بتصير |
|---|---|
| بروم صوتي أو مكالمة خاصة أو جماعية | **Online** *(بتقدر تغيّرها)* |
| مش بأي مكالمة | **Invisible** *(بتقدر تغيّرها)* |

- بتتغيّر فوراً لما تدخل أو تطلع أو تنتقل بين المكالمات.
- بتفحص كمان لما يفتح ديسكورد، فما بتضل حالتك غلط.
- ما بتغيّر حالتك إلا إذا لازم فعلاً.

## الإعدادات

افتح **Settings ← Vencord ← Plugins ← AutoSwitchStatus** (⚙️) واختار:

- **الحالة وإنت بمكالمة**: Online أو Idle أو Do Not Disturb أو Invisible (الافتراضي: **Online**)
- **الحالة وإنت برّا المكالمة**: Online أو Idle أو Do Not Disturb أو Invisible (الافتراضي: **Invisible**)

مثلاً: خليها *بالمكالمة ← Do Not Disturb* و*برّا ← Online* إذا بدك تصير "لا تزعج" بس وإنت عم تحكي.

## التركيب

> AutoSwitchStatus إضافة لـ **[Vencord](https://vencord.dev)** ([GitHub](https://github.com/Vendicated/Vencord)). الإضافات الخاصة ما بتنضاف لـ Vencord العادي اللي بتنزّله من الموقع؛ لازم Vencord ينبنى من السورس على جهازك. المثبّت تحت بيعمل كل هالشي عنك على ويندوز، وما بتحتاج تعرف برمجة.

**شو بتحتاج:** ويندوز 10 أو 11، وبرنامج ديسكورد للكمبيوتر ([نزّل ديسكورد](https://discord.com/download)). سجّل دخول على ديسكورد مرة وحدة على الأقل قبل التركيب.

1. **نزّل الإضافة.** روح على [آخر إصدار](../../releases/latest) ونزّل `AutoSwitchStatus-vX.Y.Z.zip`.
2. **فك الضغط.** كليك يمين على الملف ← **Extract All…** ← **Extract**.
3. **شغّل المثبّت.** دبل كليك على **`install.bat`**. إذا ويندوز طلّعلك "Windows protected your PC"، اضغط **More info ← Run anyway**. المثبّت بيعمل:
   - بيركّب **Git** و**Node.js** و**pnpm** إذا ناقصين (اضغط **Yes** على أي رسالة صلاحيات من ويندوز)،
   - بينزّل **Vencord** على `%USERPROFILE%\Vencord` وبيبنيه (أول مرة بياخد كم دقيقة)،
   - بيضيف إضافة AutoSwitchStatus،
   - بيعدّل ديسكورد حتى يحمّل Vencord،
   - بيسألك إذا بدك يعيد تشغيل ديسكورد. جاوب **Y**.

   عندك Vencord مبني من السورس من قبل؟ المثبّت بيلاقيه لحاله وبيضيف الإضافة بس.
4. **فعّل الإضافة.** بديسكورد: **User Settings** (⚙️ جنب اسمك) ← **Vencord** ← **Plugins**، ابحث عن **AutoSwitchStatus** وشغّلها.

### ماك ولينكس

1. **نزّل وفك الضغط** عن [آخر إصدار](../../releases/latest) (على الماك دبل كليك على ملف الـ zip).
2. **شغّل المثبّت**:
   - **ماك أو لينكس من التيرمنال (الأفضل):** اكتب `bash ` (مع مسافة)، اسحب ملف **`install.sh`** لنافذة التيرمنال، واضغط Enter. هالطريقة بتشتغل على كل إصدارات الماك بدون رسائل حماية.
   - **ماك بالدبل كليك:** دبل كليك على **`install.command`**. أول مرة الماك بيمنع الملفات من مطوّر غير معروف. على macOS 15 (Sequoia) وأحدث، افتح **System Settings ← Privacy & Security**، انزل لتحت واضغط **Open Anyway**؛ وعلى الإصدارات الأقدم، كليك يمين على الملف ← **Open** ← **Open**.

   بيعمل نفس مثبّت ويندوز: بيركّب **Git** (على الماك: Command Line Tools من Apple)، و**Node.js** (على الماك بيعرض يركّب [Homebrew](https://brew.sh) عشانه)، و**pnpm** إذا ناقصين، بينزّل **Vencord** وبيبنيه بـ `~/Vencord` (أو بيلاقي اللي عندك)، بيضيف AutoSwitchStatus، بيعدّل ديسكورد، وبيعرض يعيد تشغيله. وإذا AutoSwitchStatus مركّبة أصلاً، بيسألك إذا بدك تشيلها أو تحدّثها.
3. **فعّل الإضافة**: بديسكورد **User Settings** ← **Vencord** ← **Plugins**، ابحث عن **AutoSwitchStatus** وشغّلها.

إذا فشل تعديل ديسكورد على الماك، افتح **System Settings ← Privacy & Security ← App Management**، شغّل **Terminal**، وشغّل المثبّت مرة ثانية.

الخيارات نفسها: `bash install.sh --vencord-dir ~/Vencord`، و`--branch ptb` (أو `canary`)، و`--detect-only`.

### خيارات مثبّت ويندوز

شغّلهم من تيرمنال مفتوح بنفس المجلد:

```powershell
.\install.bat                          # نفس الدبل كليك
.\install.bat -VencordDir D:\Vencord   # استعمل (أو اعمل) Vencord بهالمجلد
.\install.bat -Branch ptb              # ديسكورد PTB (أو canary)
.\install.bat -DetectOnly              # بس بيعرض شو مركّب، وما بيغيّر شي
```

### التحديث

نزّل الإصدار الجديد، فك الضغط، وشغّل `install.bat` مرة ثانية (ماك/لينكس: `install.command` أو `install.sh`). رح يقلك إنه AutoSwitchStatus مركّبة أصلاً ويسألك إذا بدك تشيلها. جاوب **N**، وبعدين **Y** حتى يحدّثها.

### إزالة الإضافة

شغّل `install.bat` (ماك/لينكس: `install.command` أو `install.sh`) وجاوب **Y** لما يسألك إذا بدك تشيل AutoSwitchStatus. بتنشال الإضافة بس، وVencord بيضل مركّب.

## ملاحظات

- لسا بتقدر تغيّر حالتك بإيدك، بس الإضافة رح ترجع تغيّرها أول ما تدخل أو تطلع من مكالمة.
- إذا تحديث ديسكورد شال Vencord، شغّل `install.bat` مرة ثانية.

## إضافات ثانية

- [FriendsInVoice](https://github.com/mPhpMaster/FriendsInVoice): صفحة كاملة بتبيّنلك أصحابك بأي روم صوتي، مين معهم، وبتدخل الروم بضغطة وحدة.

## الرخصة

GPL-3.0-or-later، نفس Vencord.

</div>
