export default {
  footer: {
    copyright: '© 2021-2024 Parch Linux Team',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    whitepaper: 'Whitepaper',
    link_tel: 'https://t.me/parchlinux_en'
  },

  home: {
    description: 'ParchLinux, which stands for Persian Arch, is a Linux distribution based on the popular and versatile Arch Linux. It aims to provide a streamlined, user-friendly experience while maintaining the customizability and performance that Arch Linux is known for.',
    downloadButton: 'Download',
    learnMoreButton: 'Learn More',
    title: 'Parch GNU/Linux',
  },

  navigation: {
    blog: 'Blog',
    community: 'Community',
    join: 'Join',
    download: 'Download',
    features: 'Features',
    team: 'Team',
    toggle_language: 'Toggle Language',
    toggle_theme: 'Toggle Theme',
  },

  team: {
    title: 'Meet the Parch Team',
    donate: 'Donate'
  },

  features: {
    title: 'Features'
  },

  community: {
    title: 'Parch Linux Community Software',
    search: 'Search apps...',
    url: 'URL',
    repo: 'Repository',
    no_result: 'No result :('
  },

  join: {
    title: 'Join Our Community',
    caption: {
      forum: 'Forums',
      wiki: 'Wiki',
      chat: 'Chat',
      contrib: 'Contribute',
    },
    text: {
      forum: 'Connect with other Parch users and get help.',
      wiki: 'Explore our comprehensive documentation.',
      chat: 'Join our IRC or Matrix channels for real-time discussions.',
      contrib: 'Help improve Parch by contributing code or translations.',
    },
    link: {
      forum: 'Open Parch Forum',
      wiki: 'Open Parch Wiki',
      chat: 'Go to Parch Matrix',
      contrib: 'Parch Repositories',
    }
  },

  download: {
    title: 'Download Parch GNU/Linux',
    soon: 'Coming Soon'
  },

  details: {
    comp() {
      return ({ text, build_date, size, hash, maintainer }) => (
        <>
          <p><strong>Name</strong>: {text}</p>
          <p><strong>Build Date</strong>: {Intl.DateTimeFormat('en-US').format(new Date(build_date))}</p>
          <p><strong>Size</strong>: {size}</p>
          {hash && <p><strong>Hash</strong>: {hash}</p>}
          {maintainer && <p><strong>Maintainer</strong>: {maintainer}</p>}
        </>
      )
    },
    download: text => `Download ${text}`,
    changelog: 'View Changelog'
  },

  error_404: "Error 404 - Page Not Found"
}
