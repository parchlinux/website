export default {
  footer: {
    copyright: '© 2021-2025 Parch Linux Team',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    whitepaper: 'Whitepaper',
    link_tel: 'https://t.me/parchlinux_en'
  },

  home: {
    description: 'ParchLinux, which stands for Persian Arch, is a Linux distribution based on the popular and versatile Arch Linux. It aims to provide a streamlined, user-friendly experience while maintaining the customizability and performance that Arch Linux is known for.',
    downloadButton: 'Download',
    learnMoreButton: 'Learn More',
    title: 'Parch GNU/Linux'
  },

  navigation: {
    features: 'Features',
    download: 'Download',
    forum: 'Forum',
    wiki: 'Wiki',
    community: 'Community',
    blog: 'Blog',
    join: 'Join',
    team: 'Team',
    toggle_language: 'Toggle Language',
    toggle_theme: 'Toggle Theme'
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
      contrib: 'Contribute'
    },
    text: {
      forum: 'Connect with other Parch users and get help.',
      wiki: 'Explore our comprehensive documentation.',
      chat: 'Join our IRC or Matrix channels for real-time discussions.',
      contrib: 'Help improve Parch by contributing code or translations.'
    },
    link: {
      forum: 'Open Parch Forum',
      wiki: 'Open Parch Wiki',
      chat: 'Go to Parch Matrix',
      contrib: 'Parch Repositories'
    }
  },

  download: {
    title: 'Download Parch GNU/Linux',
    soon: 'Coming Soon'
  },

  details: {
    comp: () => {
      return (props = {}) => {
        const {
          text = 'N/A',
          build_date = null,
          size = 'N/A',
          hash = null,
          maintainer = null
        } = props

        return (
          <>
            <p><strong>Name</strong>: {text}</p>
            <p><strong>Build Date</strong>: {build_date ? Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(build_date)) : 'N/A'}</p>
            <p><strong>Size</strong>: {size}</p>
            {hash && <p><strong>SHA256 Hash</strong>: <code className="break-all text-sm">{hash}</code></p>}
            {maintainer && <p><strong>Maintainer</strong>: {maintainer}</p>}
          </>
        )
      }
    },
    download: (text = 'ISO') => `Download ${text}`,
    changelog: 'View Changelog',
    balenaEtcher: 'Flash with Balena Etcher',
    title: 'Image Details'
  },

  nobar: {
    title: "Sponsored by NobarCloud",
    description: "Nobar 🌱☁️ – Your platform for cloud servers & Kubernetes"
  },

  error_404: 'Error 404 - Page Not Found'
}