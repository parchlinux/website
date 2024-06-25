<template>
    <Topbar />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Topbar from "@/components/Topbar.vue"
import Footer from "@/components/Footer.vue"

export default defineComponent({
    name: "default",
    components: {
        Topbar,
        Footer
    }
});
</script>
