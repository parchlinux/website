<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>Vanilla OS is made possible by a number of open source projects and organizations. We would like to thank the
                developers of these projects for their hard work and dedication.</p>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in credits" :key="index" :item="item" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'technologies-and-credits',
    data() {
        return {
            isNotMailNotChimpOpen: false,
            credits: [
                {
                    icon: '/assets/images/orgs/linux.svg',
                    imageAsIcon: true,
                    to: 'https://kernel.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Linux',
                    description: 'The kernel of the operating system.',
                },
                {
                    icon: '/assets/images/orgs/arch.png',
                    imageAsIcon: true,
                    to: 'https://archlinux.org',
                    extLink: true,
                    type: "clickable",
                    title: 'Arch Linux',
                    description: 'A simple, lightweight linux distribution',
                },
                {
                    icon: '/assets/images/orgs/gnome.svg',
                    imageAsIcon: true,
                    to: 'https://gnome.org',
                    extLink: true,
                    type: "clickable",
                    title: 'GNOME',
                    description: 'An easy and elegant desktop environment.',
                },
                {
                    icon: '/assets/images/orgs/kde-plasma.png',
                    imageAsIcon: true,
                    to: 'https://kde.org',
                    extLink: true,
                    type: "clickable",
                    title: 'KDE Plasma',
                    description: 'The next generation desktop for Linux.',
                },
                {
                    icon: '/assets/images/orgs/vuejs.svg',
                    imageAsIcon: true,
                    to: 'https://vuejs.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Vue.js',
                    description: 'The Progressive JavaScript Framework.',
                },
                {
                    icon: '/assets/images/orgs/rust.png',
                    imageAsIcon: true,
                    to: 'https://rust-lang.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Rust Lang',
                    description: 'Programming language.',
                },
                {
                    icon: '/assets/images/orgs/ruby.png',
                    imageAsIcon: true,
                    to: 'https://ruby-lang.org/',
                    extLink: true,
                    type: "clickable",
                    title: 'Ruby Lang',
                    description: 'Programming language.',
                },
            ],
        };
    },
    methods: {
        closeNotMailNotChimp() {
            this.isNotMailNotChimpOpen = false;
        },
    },
});
</script>