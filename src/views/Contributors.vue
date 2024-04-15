<template>
  <div class="flexList anim--fadeIn">
    <div class="text text--rich">
      <p>
        We appreciate your interest in contributing to Parch Linux! Your efforts help us create a powerful and
        user-friendly operating system for everyone. 💪🏿🖥

        <br/>
        <br/>

        Thanks ❤️ to the {{ contributors.length }} people who have contributed.
      </p>
    </div>
  </div>
  <div class="contributors anim--fadeIn">
    <a v-for="contributor in contributors" :key="contributor.id" :href="contributor.profile_url">
      <div class="contributors-card">
        <img :src="contributor.avatar_url" :alt="contributor.login" class="contributors-card-image" />
        <div class="contributors-card-info">
          <h1 ref="nameElement" class="contributors-card-name">{{ contributor.login }}</h1>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import config from '@/config';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  profile_url: string;
}

export default defineComponent({
  name: 'contributors',
  setup() {
    const contributors = ref<Contributor[]>([]);

    const filterIds: string[] = [];

    const fetchContributorsData = async () => {
      try {
        const contributorsResponse = await fetch(config.contributorsListJsonUrl);
        const contributorsData = await contributorsResponse.json();

        for (const contributor of contributorsData) {
          if (!filterIds.includes(contributor.id) && !contributors.value.some((c: Contributor) => c.login === contributor.login)) {
            contributors.value.push({
              id: contributor.id,
              login: contributor.username,
              avatar_url: contributor.avatar_url,
              profile_url: "https://github.com/" + contributor.username,
            });
          }
        }
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    onMounted(() => {
      fetchContributorsData();
    });

    return {
      contributors,
    };
  },
});
</script>
