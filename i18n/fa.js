export default {
  footer: {
    copyright: '© ۱۴۰۱–۱۴۰۴ تیم پارچ لینوکس',
    privacyPolicy: 'حریم خصوصی و امنیت',
    termsOfService: 'شرایط استفاده از خدمات',
    whitepaper: 'وایت‌پیپر',
    link_tel: 'https://t.me/parchlinux_fa'
  },

  home: {
    title: 'پارچ گنو/لینوکس',
    description: 'پارچ لینوکس (مخفف Persian Arch Linux) یک توزیع زیبا، روان و کاربرپسند بر پایهٔ آرچ لینوکس است. هدف ما ارائهٔ تجربه‌ای لذت‌بخش و بدون دردسر در کنار حفظ تمام قدرت، انعطاف‌پذیری و قابلیت سفارشی‌سازی بی‌نظیر آرچ لینوکس می‌باشد.',
    downloadButton: 'دانلود پارچ',
    learnMoreButton: 'بیشتر بدانید'
  },

  navigation: {
    features: 'امکانات',
    download: 'دانلود',
    forum: 'انجمن',
    wiki: 'ویکی',
    community: 'جامعه',
    blog: 'بلاگ',
    join: 'پیوستن به ما',
    team: 'تیم پارچ',
    toggle_language: 'تغییر زبان',
    toggle_theme: 'تغییر پوسته'
  },

  team: {
    title: 'با اعضای تیم پارچ لینوکس آشنا شوید',
    donate: 'حمایت مالی'
  },

  features: {
    title: 'امکانات پارچ لینوکس'
  },

  community: {
    title: 'برنامه‌ها و پروژه‌های جامعهٔ پارچ لینوکس',
    search: 'جستجو در برنامه‌ها...',
    url: 'آدرس وب‌سایت',
    repo: 'مخزن گیت',
    no_result: 'متأسفانه نتیجه‌ای یافت نشد :('
  },

  join: {
    title: 'به جامعهٔ پارچ لینوکس بپیوندید',
    caption: {
      forum: 'انجمن کاربران',
      wiki: 'ویکی پارچ',
      chat: 'گفت‌وگوی زنده',
      contrib: 'مشارکت در پروژه'
    },
    text: {
      forum: 'با هزاران کاربر دیگر پارچ لینوکس گپ بزنید، سؤال بپرسید و کمک بگیرید.',
      wiki: 'مستندات کامل و به‌روز پارچ را مطالعه کنید و حتی خودتان در بهبود آن سهیم شوید.',
      chat: 'به اتاق‌های چت Matrix یا IRC ما بپیوندید و در لحظه با جامعه در ارتباط باشید.',
      contrib: 'با گزارش باگ، ارسال پچ، ترجمه یا هر نوع مشارکت دیگری به رشد پارچ کمک کنید.'
    },
    link: {
      forum: 'ورود به انجمن پارچ',
      wiki: 'ورود به ویکی پارچ',
      chat: 'اتاق ماتریکس پارچ',
      contrib: 'مخازن گیت پارچ'
    }
  },

  download: {
    title: 'دانلود پارچ گنو/لینوکس',
    soon: 'به‌زودی...'
  },

  details: {
    comp: () => {
      return (props = {}) => {
        const {
          text = 'نامشخص',
          build_date = null,
          size = 'نامشخص',
          hash = null,
          maintainer = null
        } = props

        return (
          <>
            نام ایمیج: {text}
            <br />
            تاریخ بیلد: {build_date ? Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(build_date)) : 'نامشخص'}
            <br />
            حجم فایل: {size}
            {hash && (
              <>
                <br />
                هش SHA256: <code style={{ direction: 'ltr', display: 'inline-block' }}>{hash}</code>
              </>
            )}
            {maintainer && (
              <>
                <br />
                نگهدارندهٔ بیلد: {maintainer}
              </>
            )}
          </>
        )
      }
    },
    download: (text = 'ایمیج') => `دانلود ${text}`,
    changelog: 'مشاهدهٔ لیست تغییرات',
    balenaEtcher: 'رایت ایمیج با BalenaEtcher',
    title: 'مشخصات ایمیج'
  },

  error_404: 'خطای ۴۰۴ — صفحهٔ مورد نظر یافت نشد'
}