const downloadData = [
  {
    title: {
      en: 'Official Versions',
      fa: 'نسخه‌های رسمی'
    },
    desc: {
      en: 'These versions of Parch are maintained by the core team.',
      fa: 'نسخه‌هایی از پارچ که توسط تیم اصلی نگهداری می‌شوند.'
    },
    links: [
      {
        text: {
          en: 'Plasma Version',
          fa: 'نسخهٔ پلاسما',
        },
        img: '/plasma.jpeg',
        href: '/download/plasma',
      },
      {
        text: {
          en: 'GNOME Version',
          fa: 'نسخهٔ گنوم',
        },
        img: '/gnome.jpeg',
        href: '/download/gnome',
      },
      // {
      //   text: {
      //     en: 'COSMIC Version',
      //     fa: 'نسخهٔ کازمیک',
      //   },
      //   img: '/cosmic.jpeg',
      //   href: '/download/cosmic',
      // },
    ]
  },
  // {
  //   title: {
  //     en: 'Community Versions',
  //     fa: 'نسخه‌های جامعه'
  //   },
  //   desc: {
  //     en: 'These versions of Parch are maintained by the community members.',
  //     fa: 'نسخه‌هایی از پارچ که توسط اعضای جامعه نگهداری می‌شوند.'
  //   },
  //   links: [
      // {
      //   text: {
      //     en: 'Mate Version',
      //     fa: 'نسخهٔ ماته',
      //   },
      //   img: '/mate.png',
      //   href: '/download/mate',
      // },
      // {
      //   text: {
      //     en: 'XFCE Version',
      //     fa: 'نسخهٔ XFCE',
      //   },
      //   img: '/xfce.jpeg',
      //   href: '/download/xfce',
      // },
  //   ]
  // },
  {
    title: {
      en: 'ARM Versions',
      fa: 'نسخه‌های آرم'
    },
    desc: {
      en: '',
      fa: ''
    },
    links: [
      {
        soon: true,
        text: {
          en: 'Parch Mobile',
          fa: 'پارچ موبایل',
        },
        img: '/mobile.jpeg',
        href: ''
      },
      {
        text: {
          en: 'ARM Generic',
          fa: 'جنریک آرم',
        },
        img: '/arm.png',
        href: '/download/arm'
      },
      {
        text: {
          en: 'Raspberry',
          fa: 'پارچ رزبری',
        },
        img: '/raspberry.png',
        href: '/download_raspberry'
      },
    ]
  },
]

export default downloadData;
