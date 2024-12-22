<template>
  <div class="w-full py-10 px-10">
    <div class="flex flex-col items-center gap-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ $t('team.title') }}</h1>
        <p class="text-lg md:text-xl lg:text-2xl max-w-3xl text-center">{{ $t('team.description') }}</p>
    </div>
  </div>
  
  <div class="space-y-16 mb-8">
    <TeamCardSection 
      v-if="team.direction?.length"
      :title="$t('team.sections.direction.title')" 
      :description="$t('team.sections.direction.description')"
      :members="team.direction"
    />

    <TeamCardSection 
      v-if="team.USGS?.length"
      :title="$t('team.sections.usgs.title')" 
      :description="$t('team.sections.usgs.description')"
      :members="team.USGS"
    />

    <TeamCardSection 
      v-if="team.members?.length"
      :title="$t('team.sections.members.title')" 
      :description="$t('team.sections.members.description')"
      :members="team.members"
    />
  </div>
</template>

<script>
import TeamCardSection from '@/components/TeamCardSection.vue';
import team from '../assets/team.json';
import { seo } from '@/composables/seo';

export default {
  name: 'TeamPage',
  components: {
    TeamCardSection
  },
  data() {
    return {
      team
    }
  },
  setup() {
    seo('team')
  }
}
</script>