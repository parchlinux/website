<template>
    <div v-if="teamItems" class="flexList anim--fadeIn">
        <div class="flexGrid">
            <card v-for="(item, index) in teamItems" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <p>There are many more people who have contributed to Parch Linux. A full list of contributors can be
                <router-link :to="{ name: 'team-contributors' }">found here</router-link>.
            </p>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'team',
    data() {
        return {
            teamItems: undefined as (undefined | any)
        }
    },
    mounted() {
        this.fetchTeamItems().then((_teamItems) => {
            this.$data.teamItems = _teamItems;
        })
    },
    methods: {
        async fetchTeamItems() {
            const url = "https://raw.githubusercontent.com/parchlinux/GetContributors/main/json/core_members.json";
            const teamRequest = await fetch(url)
            const team = await teamRequest.json();

            console.log(team);
            
            const teamItems = [];
            for (const member of team) {
                const item = {
                    to: { name: 'get-involved-funding' },
                    image: member.image,
                    title: member.name,
                    description: member.description,
                    footerActions: [] as { title: string; icon: string; iconPack: string; onClick: () => void }[],
                    badges: [] as { text: string, color?: string }[],
                };

                if (member.socials.github) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-brands fa-github',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.socials.github, '_blank');
                        },
                    });
                }
                if (member.socials.twitter) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-brands fa-twitter',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.socials.twitter, '_blank');
                        },
                    });
                }
                if (member.socials.donate) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-solid fa-mug-saucer',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.socials.donate, '_blank');
                        },
                    });
                }
                if (member.socials.mastodon) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-brands fa-mastodon',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.socials.mastodon, '_blank');
                        },
                    });
                }
                if (member.socials.website) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-solid fa-link',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.socials.website, '_blank');
                        },
                    });
                }

                teamItems.push(item);
            }

            return teamItems;
        },
    },
});
</script>
