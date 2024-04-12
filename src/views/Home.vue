<template>
  <section class="hero hero--big hero--no-margin">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus on-dark" data-focus-class="fadeInLeft"
        src="/assets/images/backgrounds/parch-desktop-hero.png" alt="Parch Linux" />
      <article class="hero-content">
        <header class="hero-heading">
          <h2>Parch Linux <span>is your next Operating System.</span></h2>
        </header>
        <div class="hero-footer">
          <div class="flexList">
            <div class="flex flex-row">
              <router-link :to="{ name: 'download' }" class="btn btn--primary" style="margin-right: 12px">
                <span class="mdi material-icons-outlined">file_download</span>
                <span>Download Now</span>
              </router-link>

              <a href="https://daramet.com/parchlinux" class="btn">
                <span class="mdi material-icons-outlined">coffee</span>
                <span>Donate</span>
              </a>
            </div>
            <div class="text text--dimmed">
              <small>Parch Linux works out of the box on a large set of devices,
                <a href="https://docs.vanillaos.org/handbook/en/installation" target="_blank">
                  learn how to install it.
                </a>
              </small>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <nav class="navigationBar" aria-label="go to sections">
    <ul>
      <li :class="{ active: activeSection === 'about' }">
        <button @click="scrollTo('#about')">About</button>
      </li>
      <li :class="{ active: activeSection === 'security' }">
        <button @click="scrollTo('#security')">Security</button>
      </li>
      <li :class="{ active: activeSection === 'play' }">
        <button @click="scrollTo('#play')">Play</button>
      </li>
    </ul>
  </nav>

  <section class="hero hero--inverted hero--big" id="about">
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/backgrounds/parch-neofetch.png"
        alt="Why Parch..." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--work-1">About</h2>
          <b class="color--work-2">Your dreaming distro.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>
              Unleash the potential of Linux with ease. This user-friendly
              distro built on Arch Linux offers a beautiful and intuitive
              experience, perfect for beginners and veterans alike. Dive into
              the world of Linux with a smooth installation process, stunning
              visuals, and a lightweight design that keeps your system running
              like a dream.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--inverted hero--big" id="security">
    <div class="hero-wrapper hero-wrapper-rtl container">
      <img class="hero-image onFocus" data-focus-class="fadeInRight" src="/assets/images/icons/security.png"
        alt="Why Parch..." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--work-1">Security</h2>
          <b class="color--work-2">Build on trust.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>
              ParchLinux inherits the renowned stability and security of Arch
              Linux. This foundation ensures your system remains protected from
              potential threats. Regular updates keep your software patched and
              secure, while the inherent nature of Arch Linux promotes a
              minimalist approach, reducing the attack surface for
              vulnerabilities. Additionally, the supportive ParchLinux community
              is always vigilant, offering assistance and keeping you informed
              about security best practices. With ParchLinux, you can enjoy the
              freedom and power of Linux with the peace of mind that comes with
              a secure and trustworthy operating system.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero hero--big hero--gn-purple hero--clipped" id="play">
    <div class="hero-back">
      <video autoplay muted loop playsinline>
        <source src="/assets/videos/ron-lach-friends-playing-on-computer.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-wrapper container">
      <img class="hero-image onFocus" data-focus-class="fadeInZoom" src="/assets/images/backgrounds/popular-games.svg"
        alt="Play your favorite video games." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--play-1">Play</h2>
          <b class="color--play-2">your favorite video games.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>
              We all need some fun time after a long week. From the most niche
              of indie titles to the largest e-sports games in the market,
              Vanilla OS is your gaming partner with support for the industry's
              most popular game launchers and peripherals.
            </p>
            <p>
              Embark on new adventures, discover new worlds, or simply relax in
              your favorite games with zero effort. Just install your favorite
              games, and we handle the rest.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "home",
  data() {
    return {
      showInfo: false,
      showSorry: false,
      info: [
        {
          icon: "security",
          title: "Immutable but Customizable",
          description:
            "Vanilla OS is an immutable operating system, meaning that its core components are resistant\
          to changes, keeping the system stable and reliable.\
          However, you'll probably never notice that, because Vanilla OS is also highly customizable, you can\
          still install extra software with Flatpak, VSO, or even building it by yourself like you would\
          do on any normal operating system. You can also install software from any Linux distribution.",
        },
        {
          icon: "hotel_class",
          title: "Stable Beyond Belief",
          description:
            "Vanilla OS develops and uses many technologies to ensure that your system is always stable and reliable\
          in any situation, whatever your needs are.\
          You don't have to worry about your system breaking after an update, or your system not booting\
          when you need it the most. Vanilla OS performs atomic updates, meaning that changes are applied all at once\
          or not at all, without leaving your system in a broken state.",
        },
        {
          icon: "update",
          title: "Smart Background Updates",
          description:
            "Vanilla OS performs background updates in a smart way by detecting whether your device is idle.\
          That way, you don't have to worry about your system being slow or\
          unresponsive during your routine. You'll get all the new features and bug fixes without even noticing it\
          until you reboot your system.",
        },
        {
          icon: "verified",
          title: "Startup Verified",
          description:
            "Vanilla OS is verified at startup, meaning that that your system is guaranteed\
          to be in a good state before you start using it.\
          This is done by checking the integrity of the system and its components at startup, and by\
          ensuring that nothing has been tampered with. If something is wrong, the system will\
          discourage you from using it, suggesting you to revert to a previous working state.",
        },
        {
          icon: "home",
          title: "Compatible With You",
          description:
            "Vanilla OS is compatible with all your favorite apps, whether you want to listen to\
          music with Spotify, play your favorite games on Steam, or surf the web with Google Chrome,\
          you can do it all on Vanilla OS as you would do on any other operating system.\
          Vanilla OS is also compatible with all your favorite peripherals like printers, scanners, and more.",
        },
        {
          icon: "lock",
          title: "Privacy First",
          description:
            "Vanilla OS is designed with privacy in mind, it doesn't collect any data about you,\
          and it doesn't send any data to third parties.\
          We take your privacy very seriously, and we believe that you should be in control of your data,\
          not us or anyone else. Everything we do is open source, so you can verify that we're not doing\
          anything malicious.",
        },
        {
          icon: "accessibility_new",
          title: "Accessible to Everyone",
          description:
            "Vanilla OS is designed to be easy and accessible to everyone. Accessibility is\
          a first class citizen in Vanilla OS, and we're constantly working to improve it.\
          We believe that everyone should be able to use a computer, no matter your abilities, you\
          will find yourself at home on Vanilla OS.",
        },
      ],
      medias: [
        {
          icon: "/assets/images/media/zdnet.svg",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.zdnet.com/article/vanilla-os-offers-a-new-take-on-security-for-the-linux-desktop/",
          extLink: true,
          type: "clickable",
          description:
            "If you're looking for a new operating system that takes security seriously… Vanilla OS might be just the ticket.",
        },
        {
          icon: "/assets/images/media/the_register.svg",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.theregister.com/2023/01/03/vanilla_os_2210/",
          extLink: true,
          type: "clickable",
          description:
            "Vanilla OS is going for bigger, bolder improvement to the Linux desktop… it could prove transformative to the Linux industry… ",
        },
        {
          icon: "/assets/images/media/techrepublic-logo.svg",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.techrepublic.com/article/vanilla-os-linux-desktop/",
          extLink: true,
          type: "clickable",
          description:
            "This will be a project you’ll want to keep a close watch on… I think Vanilla OS could be a real game-changer.",
        },
        {
          icon: "/assets/images/media/omg-linux.png",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.omglinux.com/vanilla-os-first-release-download/",
          extLink: true,
          type: "clickable",
          description:
            "Far more than “just another” Ubuntu fork, this distro takes a bold new approach to desktop computing using an immutable file system.",
        },
        {
          icon: "/assets/images/media/phoronix.png",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.phoronix.com/news/Vanilla-OS-2.0-Debian",
          extLink: true,
          type: "clickable",
          description:
            "Vanilla OS is an immutable and atomic version of Ubuntu Linux that aims to provide a pleasant Linux desktop experience.",
        },
        {
          icon: "/assets/images/media/itsfoss-logo.webp",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://news.itsfoss.com/vanilla-os-beta/",
          extLink: true,
          type: "clickable",
          description:
            "Being a new distro, Vanilla OS has a well-equipped feature set that you might like.",
        },
        {
          icon: "/assets/images/media/muo-logo-full-colored-light.svg",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.makeuseof.com/vanilla-os-immutable-linux-distro/",
          extLink: true,
          type: "clickable",
          description:
            "Vanilla OS takes Ubuntu and turns it into an immutable desktop Linux distro, free from all of Canonical's recent changes to the OS.",
        },
        {
          icon: "/assets/images/media/ha-logo-2x.png",
          imageAsIcon: true,
          imageClasses: ["img--white-on-dark"],
          to: "https://www.hostingadvice.com/blog/vanillaos-immutable-linux-distribution/",
          extLink: true,
          type: "clickable",
          description:
            "For those who want a simple, immutable, and customizable experience, Vanilla OS steps into the spotlight.",
        },
      ],
    };
  },
  setup() {
    const activeSection = ref<string>("");

    const handleScrollAnimations = () => {
      const onFocusElements = document.querySelectorAll(".onFocus");

      const observerOptions = {
        threshold: 0.2,
      };

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const focusClass = el.getAttribute("data-focus-class");

            if (focusClass) {
              switch (focusClass) {
                case "fadeIn":
                  el.style.opacity = "1";
                  el.style.filter = "blur(0)";
                  break;
                case "fadeInZoom":
                  el.style.opacity = "1";
                  el.style.transform = "scale(1)";
                  el.style.filter = "blur(0)";
                  break;
                case "fadeInLeft":
                  el.style.opacity = "1";
                  el.style.transform = "translateX(0)";
                  el.style.filter = "blur(0)";
                  break;
                case "fadeInRight":
                  el.style.opacity = "1";
                  el.style.transform = "translateX(0)";
                  el.style.filter = "blur(0)";
                  break;
                default:
                  break;
              }
            }
          } else {
            const el = entry.target as HTMLElement;
            const focusClass = el.getAttribute("data-focus-class");

            if (focusClass) {
              switch (focusClass) {
                case "fadeIn":
                  el.style.opacity = "0";
                  el.style.filter = "blur(10px)";
                  break;
                case "fadeInZoom":
                  el.style.opacity = "0";
                  el.style.transform = "scale(0.95)";
                  el.style.filter = "blur(10px)";
                  break;
                case "fadeInLeft":
                  el.style.opacity = "0";
                  el.style.transform = "translateX(-40px)";
                  el.style.filter = "blur(10px)";
                  break;
                case "fadeInRight":
                  el.style.opacity = "0";
                  el.style.transform = "translateX(40px)";
                  el.style.filter = "blur(10px)";
                  break;
                default:
                  break;
              }
            }
          }
        });
      }, observerOptions);

      onFocusElements.forEach((el) => {
        intersectionObserver.observe(el);
      });
    };

    const handleActiveSection = () => {
      const sections = document.querySelectorAll(".hero");
      const observerOptions = {
        threshold: 0.5,
      };

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              activeSection.value = id;
            }
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        intersectionObserver.observe(section);
      });
    };

    onMounted(() => {
      handleScrollAnimations();
      handleActiveSection();
      window.addEventListener("scroll", handleScrollAnimations);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScrollAnimations);
    });

    return {
      activeSection,
    };
  },
  methods: {
    scrollTo(id: string) {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleInfo() {
      if (this.showInfo) {
        this.showSorry = true;
        this.showInfo = false;
        setTimeout(() => {
          this.showSorry = false;
        }, 1500);
      } else {
        this.showInfo = true;
      }
    },
  },
});
</script>
