export default {
  footer: {
    copyright: '© 1401-1403 تیم پارچ لینوکس',
    privacyPolicy: 'حریم خصوصی و امنیت',
    termsOfService: 'شرایط استفاده',
    whitepaper: 'وایت‌پیپر',
    link_tel: 'https://t.me/parchlinux_fa'
  },

  home: {
    description: 'پارچ‌لینوکس که مخفف Persian Arch است، یک توزیع لینوکس مبتنی بر آرچ لینوکس محبوب و چندمنظوره است. هدف آن ارائه‌ی تجربه‌ای روان و کاربرپسند است، در حالی که قابلیت سفارشی‌سازی و عملکردی که آرچ لینوکس به آن مشهور است را حفظ می‌کند.',
    downloadButton: 'دانلود',
    learnMoreButton: 'بیشتر بدانید',
    title: 'پارچ گنو/لینوکس',
  },

  navigation: {
    features: 'امکانات',
    download: 'دانلود',
    forum: 'انجمن',
    wiki: 'ویکی',
    community: 'جامعه',
    blog: 'بلاگ',
    join: 'پیوستن',
    team: 'تیم',
    toggle_language: 'تغییر زبان',
    toggle_theme: 'تغییر پوسته',
  },

  team: {
    title: 'با تیم پارچ آشنا شوید',
    donate: 'اهدا'
  },

  features: {
    title: 'امکانات'
  },

  community: {
    title: 'برنامه‌های جامعه پارچ لینوکس',
    search: 'جستجوی برنامه‌ها...',
    url: 'نشانی',
    repo: 'مخزن',
    no_result: 'نتیجه‌ای یافت نشد :('
  },


  join: {
    title: 'به جامعهٔ ما بپیوندید',
    caption: {
      forum: 'فروم',
      wiki: 'ویکی',
      chat: 'چت',
      contrib: 'مشارکت',
    },
    text: {
      forum: 'با سایر کاربران پارچ ارتباط برقرار کنید و کمک بگیرید.',
      wiki: 'اسناد جامع ما را کاوش کنید.',
      chat: 'برای بحث و گفتگوی زنده به کانال‌های IRC یا Matrix ما بپیوندید.',
      contrib: 'با مشارکت در کد یا ترجمه به بهبود پارچ کمک کنید.',
    },
    link: {
      forum: 'ورود به فروم پارچ',
      wiki: 'ورود به ویکی پارچ',
      chat: 'ورود به کانال ماتریکس',
      contrib: 'مخازن پارچ',
    }
  },

  download: {
    title: 'دانلود پارچ گنو/لینوکس',
    soon: 'به زودی'
  },

  details: {
    comp() {
      return ({ text, build_date, size, hash, maintainer }) => (
        <>
          <p><strong>نام</strong>: {text}</p>
          <p><strong>تاریخ بیلد</strong>: {Intl.DateTimeFormat('fa-IR').format(new Date(build_date))}</p>
          <p><strong>حجم</strong>: <span dir="ltr">{size}</span></p>
          {hash && <p><strong>هش</strong>: {hash}</p>}
          {maintainer && <p><strong>نگهدارنده</strong>: {maintainer}</p>}
        </>
      )
    },
    download: text => `دانلود ${text}`,
    changelog: 'مشاهدهٔ تغییرات',
    balenaEtcher: 'نوشتن با Balena Etcher'
  },

  error_404: "ارور ۴۰۴ - برگه پیدا نشد"
}
