<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <!-- <p> -->
                <!-- TODO -->
            <!-- </p> -->
        </div>
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
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'team',
    computed: {
        teamItems() {
            const team = [
                {
                    name: 'Taha Dostifam',
                    description: 'Front-End Developer | Content Creator.',
                    image: 'https://avatars.githubusercontent.com/u/72092675?v=4',
                    links: {
                        githubUsername: 'tahadostifam',
                        twitterUsername: 'taha__dev',
                        website: 'https://github.com/tahadostifam',
                    },
                },
            ];
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
                if (member.links.githubUsername) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-brands fa-github',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(`https://github.com/${member.links.githubUsername}`, '_blank');
                        },
                    });
                }
                if (member.links.twitterUsername) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-brands fa-twitter',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(`https://twitter.com/${member.links.twitterUsername}`, '_blank');
                        },
                    });
                }
                if (member.links.mastodonLink) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-brands fa-mastodon',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.links.mastodonLink, '_blank');
                        },
                    });
                }
                if (member.links.website) {
                    item.footerActions.push({
                        title: '',
                        icon: 'fa-solid fa-link',
                        iconPack: 'fa',
                        onClick: () => {
                            window.open(member.links.website, '_blank');
                        },
                    });
                }
                if (member.fabricators) {
                    item.badges.push({
                        text: 'works @ fabricators.ltd',
                        color: 'brown'
                    });
                }
                if (member.lit) {
                    item.badges.push({
                        text: 'Lit Contributor',
                    });
                }
                teamItems.push(item);
            }
            return teamItems;
        },
    },
});
</script>
  
