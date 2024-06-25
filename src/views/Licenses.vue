<template>
    <div class="flexList">
        <div class="text text--rich">
            <h3>Core Licenses</h3>
            <p>The following licenses apply to Parch Linux projects.</p>
        </div>
        <div class="flexGrid flexGrid--full anim--fadeIn">
            <card v-for="(item, index) in licenses" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="spacer"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import card from "@/components/Card.vue"

export default defineComponent({
    name: 'licenses',
    components: {card},
    data() {
        return {
            licenses: [
                {
                    title: 'GNU General Public License 3',
                    footerActions: [
                        {
                            title: 'Browse',
                            icon: 'book',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://www.gnu.org/licenses/gpl-3.0.html', '_blank');
                            },
                        },
                        {
                            title: 'Usage',
                            icon: 'code',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://github.com/search?q=org%3Aparchlinux++license%3Agpl-3.0&type=repositories', '_blank');
                            },
                        },
                    ],
                },
            ]
        };
    },
});
</script>
