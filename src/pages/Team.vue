<template>
  <header class="section-heading content-shell"><span class="section-index">04 / MUN EPFL</span><h1>{{ $t('team.title') }}</h1><p>{{ $t('team.description') }}</p></header>
  <figure class="team-panorama content-shell"><img src="/pictures/committee_groups/full_committee_2026.jpg" alt="Full Committee" loading="lazy"/></figure>

  <div class="space-y-16 mb-8">
    <CommitteeSection
      v-if="team.committee?.length"
      :title="$t('team.sections.committee.title')"
      :description="$t('team.sections.committee.description')"
      :committees="team.committee"
    />

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
import CommitteeSection from '@/components/CommitteeSection.vue';
import team from '../assets/team.json';
import { seo } from '@/composables/seo';


export default {
  name: 'TeamPage',
  components: {
    TeamCardSection,
    CommitteeSection
  },
  data() {
    return {
      team
    }
  },
  setup() {
    seo('team')
  },
}
</script>