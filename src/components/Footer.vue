<template>
    <footer class="siteFooter ">
        <section class="siteFooter-wrapper container">
            <article class="siteFooter-header">
                <div class="siteFooter-logo">
                    <router-link :to="{ name: 'home' }">
                        <img src="/assets/images/brand/parch-full-text.png" alt="Parch Linux" />
                    </router-link>
                </div>
                <nav class="siteFooter-navigation">
                    <ul>
                        <TopbarNavigationLinks/>
                    </ul>
                </nav>
            </article>
            <nav class="siteFooter-sitemap" aria-label="sitemap">
                <ul>
                    <li><b>Legal and More</b></li>
                    <li><router-link :to="{ name: 'privacy-policy' }">Privacy Policy</router-link></li>
                    <li><router-link :to="{ name: 'os-privacy-policy' }">OS Privacy Policy</router-link></li>
                    <li><router-link :to="{ name: 'licenses' }">Licenses</router-link></li>
                    <li><router-link :to="{ name: 'whitepaper' }">White Paper</router-link></li>
                </ul>
                <ul>
                    <li><b>Community</b></li>
                    <li><router-link to="/team">Our Team</router-link></li>
                    <li><router-link to="/community">Community</router-link></li>
                    <li><router-link to="/code-of-conduct">Code of Conduct</router-link></li>
                    <li class="spacer"></li>
                    <li><b>Support</b></li>
                    <li><a href="https://parchlinux.github.io/docs">Documentation</a></li>
                    <li><a href="https://parchlinux.github.io/handbook">Handbook</a></li>
                    <li><router-link :to="{ name: 'community' }">Community Support</router-link></li>
                </ul>
                <ul>
                    <li><b>Developers</b></li>
                    <li><router-link :to="{ name: 'developers-program' }">Join the Developers Program</router-link></li>
                    <li><a href="https://github.com/parchlinux" target="_blank">Source Code</a></li>
                    <li><router-link :to="{ name: 'technologies-and-credits' }">Technologies and Credits</router-link></li>
                    <li><router-link :to="{ name: 'nerd-info' }">Information for Nerds</router-link></li>

                    <li class="spacer"></li>
                    
                    <li><b>Get Parch Linux</b></li>
                    <li><router-link :to="{ name: 'download' }">Download</router-link></li>
                </ul>
            </nav>
        </section>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopbarNavigationLinks from "./TopbarNavigationLinks.vue";

export default defineComponent({
    name: 'SiteFooter',
    computed: {
        showFloatNotice() {
            return this.$route.name !== 'article' && this.$route.name !== 'download-orchid-beta';
        }
    }
});
</script>
