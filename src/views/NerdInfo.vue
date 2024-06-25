<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>The Ultimate Arch Linux Spin for Tinkerers
                If you're a Linux nerd who craves bleeding-edge software, extreme customizability, and an
                uncompromisingly minimal design philosophy, then ParchLinux is the Arch-based distro for you. Building
                upon the rock-solid foundations of Arch Linux, ParchLinux introduces several compelling enhancements.
            </p>
        </div>

        <card v-for="(item, index) in info" :key="index" :item="item" />

        <div class="text text--rich">
            <p>For Linux purists seeking an untamed Arch distro with thoughtful refinements tailored for power users,
                ParchLinux strips away all distractions to put you in total control of your system. It's the perfect
                realm for nerds who want to build their Linux experience from the ground up.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import card from "@/components/Card.vue"


export default defineComponent({
    name: 'technologies-and-credits',
    components: {card},
    data() {
        return {
            info: [
                {
                    icon: 'extension',
                    title: 'Arch at Its Purest',
                    description: "ParchLinux stays true to Arch's rolling release model to provide the latest stable software the moment it's available. You get the rock-solid Pacman package manager, AUR access, and a minimal base installation that adheres strictly to the KISS philosophy. It's pure, undiluted Arch.",
                },
                {
                    icon: 'extension',
                    title: 'Vazir Matn Font Rendering',
                    description: "ParchLinux integrates the Vazir Matn font with specialized rendering tweaks, ensuring reading text is a beautifully anti-aliased experience on modern displays.",
                },
                {
                    icon: 'extension',
                    title: 'User-Friendly Sans Hand-Holding',
                    description: "The notorious lack of hand-holding in Arch is maintained, but ParchLinux provides a graphical installer and basic configurations to smooth entry for new users.",
                },
                {
                    icon: 'extension',
                    title: 'Planned FreeBSD-Style Ports ',
                    description: "While not yet implemented, ParchLinux plans to simplify building packages from source with custom options inspired by FreeBSD's powerful ports system.",
                },
            ],
        };
    },
});
</script>
