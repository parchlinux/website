const category = {
  develop: {
    en: 'Develop',
    fa: 'توسعه'
  },
  communication: {
    en: 'Communication',
    fa: 'ارتباطات'
  },
  multimedia: {
    en: 'Multimedia',
    fa: 'چندرسانه‌ای'
  },
}

const communityData = {
  categories: Object.values(category),
  apps: [
    {
      name: {
        en: 'Neovim',
        fa: 'نئوویم',
      },
      desc: {
        en: 'Powerful and extendable text editor',
        fa: 'ویرایشگر متن قدرتمند و قابل تمدید',
      },
      cat: category.develop,
      href: '#'
    },
    {
      name: {
        en: 'Discord',
        fa: 'دیسکورد',
      },
      desc: {
        en: 'Voice & text chat application',
        fa: 'اپلیکیشن چت صوتی و متنی',
      },
      cat: category.communication,
      href: '#'
    },
    {
      name: {
        en: 'OBS Studio',
        fa: 'OBS استودیو',
      },
      desc: {
        en: 'Screen recorder and streaming software',
        fa: 'نرم‌افزار ضبط صفحه نمایش و پخش زنده',
      },
      cat: category.multimedia,
      href: '#'
    },
  ]
}

export default communityData;
