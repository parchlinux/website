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
      <li :class="{ active: activeSection === 'rolling_release' }">
        <button @click="scrollTo('#rolling_release')">Rolling Release</button>
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
      <img class="hero-image onFocus" data-focus-class="fadeInLeft" src="/assets/images/icons/security.png"
        alt="Why Parch..." />
      <article class="hero-content">
        <header class="hero-heading">
          <h2 class="color--work-1">Security</h2>
          <b class="color--work-2">Build on trust.</b>
        </header>
        <div class="flexList">
          <div class="text text--spaced">
            <p>
              Parch Linux inherits the renowned stability and security of Arch
              Linux. This foundation ensures your system remains protected from
              potential threats. Regular updates keep your software patched and
              secure, while the inherent nature of Arch Linux promotes a
              minimalist approach, reducing the attack surface for
              vulnerabilities. Additionally, the supportive Parch Linux community
              is always vigilant, offering assistance and keeping you informed
              about security best practices. With Parch Linux, you can enjoy the
              freedom and power of Linux with the peace of mind that comes with
              a secure and trustworthy operating system.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="hero-block" id="rolling_release">
    <div class="container">
      <img class="hero-image onFocus" data-focus-class="fadeInZoom"
        src="/assets/images/backgrounds/parch-rolling-release.png" alt="Parch Rolling Release Image" />
      <article class="hero-content">
        <div class="text text--spaced">
          <p>
            Parch Linux embraces the rolling release model, keeping you on the cutting edge of technology. Unlike
            traditional fixed release cycles, Parch Linux delivers continuous updates, ensuring you always have access to
            the latest software versions.
            <br />
            <br />
            The rolling release model might sound daunting, but fear not! Parch Linux, built on the robust Arch Linux
            foundation, is meticulously maintained to ensure update stability. Additionally, our supportive community is
            always available to assist you with any update-related questions or concerns. With Parch Linux, you can enjoy
            the benefits of cutting-edge software without compromising on system stability.
          </p>
        </div>
      </article>
    </div>
  </section>

  <!-- <section class="hero hero--big hero--gn-purple hero--clipped" id="play">
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
  </section> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "home",
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
  },
});
</script>
