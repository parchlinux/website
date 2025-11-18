const en = `
# Parch Linux Whitepaper

Parch Linux is a community-driven Arch-based distribution created specifically for Persian-speaking users who want the full power of Arch Linux without the steep initial learning curve that has historically discouraged many from using it.

The project stays as close as possible to upstream Arch Linux. All official repositories are used directly and without modification. The only addition is a minimal overlay repository that contains a small number of targeted patches and packages. These changes focus almost entirely on delivering an excellent out-of-the-box Persian experience: optimal font rendering and hinting for Persian text, seamless right-to-left interface support from the first boot, a functional Jalali calendar in desktop panels, correct locale behaviour in Firefox and Thunderbird, immediate printer and scanner detection, and a handful of similar refinements that make the system feel truly native in Persian the moment installation finishes.

Installation is handled by the proven Calamares graphical installer. Official editions include a flagship KDE Plasma variant that receives extra visual and gaming-oriented polish, along with GNOME, XFCE, and a minimal ISO intended for advanced users who prefer to build their own environment. The live session and the installed system are designed to be immediately usable; no post-install configuration is required to obtain a complete, beautiful, and fully functional Persian desktop.

Performance, update cadence, and stability are identical to upstream Arch Linux. There is no additional bloat, no rebuilt packages, and no divergence that would delay updates or introduce compatibility issues. Parch simply eliminates the friction of the first few days that new Arch users, particularly Persian speakers, have traditionally faced.

Security follows the standard Arch approach of rapid updates and user responsibility. AppArmor profiles are enabled by default, a sensible firewall ruleset is provided, and optional unattended security upgrades are available for those who prefer them.

A few lightweight in-house utilities are shipped with the distribution: a one-click Waydroid installation script for running Android applications, the Dorood welcome application that offers useful first-run guidance in Persian, and minor gaming optimisations in the Plasma edition.

All development is carried out by volunteers in full public view on the official forum, Matrix channels, and Git repositories. There is no company, no funding, no telemetry, and no commercial agenda. New editions and features are added only when contributors are willing and able to maintain them properly.

In the future the project intends to keep the installer and live environment up to date, expand the range of official editions as contributor capacity permits, improve the existing helper tools, and eventually deliver a simple graphical software manager that integrates cleanly with each supported desktop environment. The long-term goal is to remain the reference Arch-based distribution for Persian-speaking users worldwide while continuing to give back meaningful improvements to the broader Arch and open-source communities.

Parch Linux delivers the complete speed, freshness, and freedom of Arch Linux combined with an installation process and default configuration that fully respect the linguistic and cultural needs of Persian users. It allows newcomers to start enjoying Arch from day one and gives experienced users a polished, ready-to-use base without any compromise on the principles they value.
`

const fa = `
# وایت‌پیپر پارچ لینوکس

پارچ لینوکس یک توزیع جامعه‌محور مبتنی بر آرچ لینوکس است که مخصوص کاربران فارسی‌زبان ساخته شده و هدفش ارائه تجربه کامل آرچ بدون منحنی یادگیری تند اولیه‌ای است که همیشه بسیاری را از نصب آرچ اصلی باز داشته.

پروژه تا حد ممکن به آرچ بالادستی وفادار مانده است. تمام مخازن رسمی آرچ بدون تغییر استفاده می‌شوند و تنها یک مخزن اورلی بسیار کوچک اضافه شده که شامل تعداد محدودی پچ و بسته است. این تغییرات تقریباً تماماً بر ارائه تجربه عالی فارسی از همان ابتدا تمرکز دارند: رندرینگ و هینتینگ بهینه فونت‌های فارسی، پشتیبانی کامل راست‌به‌چپ از لحظه بوت اول، تقویم جلالی کارکردنی در پنل‌های دسکتاپ، رفتار صحیح محلی‌سازی در فایرفاکس و تاندردبرد، تشخیص فوری پرینتر و اسکنر و چند اصلاح مشابه دیگر که باعث می‌شود سیستم از لحظه پایان نصب برای کاربر فارسی‌زبان کاملاً بومی احساس شود.

نصب با نصب‌کننده گرافیکی پایدار و شناخته‌شده Calamares انجام می‌شود. نسخه‌های رسمی شامل KDE Plasma به عنوان پرچم‌دار (با پولیش اضافی ظاهری و گیمینگ)، GNOME، XFCE و یک ISO مینیمال برای کاربران پیشرفته است. محیط زنده و سیستم نصب‌شده طوری طراحی شده‌اند که بلافاصله قابل استفاده باشند؛ هیچ تنظیم اضافی پس از نصب برای رسیدن به یک دسکتاپ فارسی کامل و زیبا لازم نیست.

عملکرد، سرعت به‌روزرسانی و پایداری دقیقاً همانند آرچ بالادستی است. هیچ بسته اضافی، هیچ بازسازی غیرضروری و هیچ انحرافی که باعث تأخیر یا مشکل سازگاری شود وجود ندارد. پارچ فقط اصطکاک روزهای اول را که کاربران جدید آرچ، به‌خصوص فارسی‌زبان‌ها، تجربه می‌کردند حذف می‌کند.

امنیت هم مدل استاندارد آرچ را دنبال می‌کند: به‌روزرسانی‌های سریع و مسئولیت کاربر. پروفایل‌های AppArmor به صورت پیش‌فرض فعال هستند، قوانین فایروال منطقی ارائه شده و به‌روزرسانی خودکار امنیتی به عنوان گزینه در دسترس است.

چند ابزار کمکی سبک داخلی همراه سیستم عرضه می‌شود: اسکریپت یک‌کلیکه نصب Waydroid برای اجرای اپ‌های اندروید، برنامه خوش‌آمدگویی درود که راهنمایی‌های مفید اولیه را به فارسی نشان می‌دهد و بهینه‌سازی‌های جزئی گیمینگ در نسخه پلاسما.

تمام توسعه توسط داوطلبان و به صورت کاملاً عمومی در فروم رسمی، کانال‌های ماتریکس و مخازن گیت انجام می‌شود. هیچ شرکت، بودجه یا تله‌متری وجود ندارد. نسخه‌ها و ویژگی‌های جدید فقط وقتی اضافه می‌شوند که مشارکت‌کنندگانی برای نگهداری درست آن‌ها وجود داشته باشند.

در آینده پروژه قصد دارد نصب‌کننده و محیط زنده را همیشه به‌روز نگه دارد، در صورت امکان تعداد نسخه‌های رسمی را گسترش دهد، ابزارهای موجود را بهبود بخشد و در نهایت یک مدیر نرم‌افزار گرافیکی ساده و بومی برای هر محیط دسکتاپ ارائه کند. هدف بلندمدت، ماندن به عنوان مرجع اصلی توزیع‌های مبتنی بر آرچ برای فارسی‌زبانان در سراسر جهان و بازگرداندن بهبودهای معنادار به جامعه آرچ و متن‌باز گسترده‌تر است.

پارچ لینوکس سرعت، تازگی و آزادی کامل آرچ لینوکس را با فرآیند نصب و پیکربندی پیش‌فرضی که نیازهای زبانی و فرهنگی کاربران فارسی را کاملاً رعایت می‌کند ترکیب کرده است. این توزیع به کاربران تازه‌کار اجازه می‌دهد از روز اول از آرچ لذت ببرند و به کاربران باتجربه پایه‌ای پولیش‌شده و آماده استفاده ارائه می‌دهد بدون هیچ مصالحه‌ای در اصول مورد علاقه‌شان.
`

export default { en, fa }
