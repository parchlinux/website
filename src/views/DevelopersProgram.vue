<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>Our developers program provides a way for developers to get access to exclusive features and support
                while supporting the development of Parch Linux.</p>
            <h3>What's included</h3>
        </div>
        <div class="flexGrid flexGrid--2">
            <card v-for="(item, index) in helpItems" :key="index" :item="item" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import card from "@/components/Card.vue"

export default defineComponent({
    name: 'developers-program',
    components: {card},
    data() {
        return {
            helpItems: [
                {
                    icon: 'build',
                    title: 'Pre-release builds',
                    description: 'Get access to pre-release builds of Parch Linux before they are released to the public.',
                },
                {
                    icon: 'email',
                    title: 'Weekly funnyletter',
                    description: 'Get a weekly funnyletter with updates about the development of Parch Linux .',
                },
                {
                    icon: 'bug_report',
                    title: 'Testing programs',
                    description: 'Get access to testing programs for new features and products.',
                },
                {
                    icon: 'bug_report',
                    title: 'Updates Priority',
                    description: 'Get proposed updates before they are released to the public.',
                },
                {
                    icon: 'support_agent',
                    title: 'Dedicated Discord channel',
                    description: 'Get access to a dedicated Discord channel and chat with the developers.',
                },
                {
                    icon: 'verified',
                    title: 'Dedicated badge',
                    description: 'Show your support with a dedicated badge in the Parch Linux community.',
                },
            ],
        };
    }
});
</script>