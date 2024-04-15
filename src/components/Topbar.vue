<template>
    <header class="topBar">
        <div class="topBar-wrapper container">
            <div class="topBar-logo">
                <router-link :to="{ name: 'home' }">
                    <img src="/assets/images/brand/parch-full-text.png" alt="Parch Linux" class="on-dark" />
                </router-link>
            </div>

            <div class="overlay" v-if="isMenuToggled" @click="toggleMenu"></div>

            <nav>
                <ul class="topBar-navigation" :class="{ active: isMenuToggled }">
                    <TopbarNavigationLinks/>
                </ul>
            </nav>
            <button class="topBar-hamburger topBar-hamburger--collapse topBar-hamburger--squeeze"
                :class="{ 'is-active': isMenuToggled }" @click="toggleMenu" type="button">
                <span class="topBar-hamburger-box">
                    <span class="topBar-hamburger-inner"></span>
                </span>
            </button>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import TopbarNavigationLinks from "./TopbarNavigationLinks.vue";

export default defineComponent({
    name: "Topbar",
    components: {TopbarNavigationLinks},
    data() {
        return {
            isMenuToggled: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuToggled = !this.isMenuToggled;
        },
    },
    computed: {
        currentRoute() {
            return useRoute();
        },
    },
});
</script>
