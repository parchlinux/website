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
  network: {
    en: 'Network',
    fa: 'شبکه'
  },
}

const communityData = {
  categories: Object.values(category),
  apps: [
    {
      name: {
        en: 'Carburetor',
        fa: 'کاربراتور',
      },
      desc: {
        en: 'Browse anonymously',
        fa: 'در اینترنت به شکل ناشناس کاوش کنید',
      },
      cat: category.network,
      url: 'https://tractor.frama.io/carburetor/',
      repo: 'https://framagit.org/tractor/carburetor',
      page: {
        en: `
Discover anonymous browsing with Carburetor on your phones and computers. Tailored for GNOME, it's your hidden superhero for online adventures, powered by TOR. Carburetor provides a local TOR proxy that hides your IP, ensuring your Internet activities remain encrypted, anonymized, and untraceable. Don't get your hands dirty with system files anymore – just tap into the app, keeping your online world safe and private. Customize settings if you want, but you don't have to. Carburetor is Free Software and puts you in control. No worries, just enjoy your anonymous browsing!
## Installation
You can install Carburetor using this command:
\`\`\`
sudo pacman -S carburetor
\`\`\`
`,
        fa: `
کاربراتور پیشانه‌ای گرافیکی برای تراکتور است. این کاره با GTK4 و Libadwaita نوشته شده وقشر هدف آن، کاربران گنوم روی تلفن‌های همراه هستند تا بگذارد به سادگی به مسیریابی پیازی (تور وصل شوند. کاربراتور می‌تواند روی میزکارها نیز اجرا شده تا بگذارد کاربران بدون دستکاری در سامانه، یک پیشکار تور در فضای کاربری ایجاد کنند.
## نصب
برای نصب کاربراتور دستور زیر را در ترمینال وارد کنید:
\`\`\`
sudo pacman -S carburetor
\`\`\`
`
      }
    },
  ]
}

export default communityData;
