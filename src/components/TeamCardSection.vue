<template>
  <div class="team-group content-shell">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center">{{ title }}</h2>
    <p v-if="description" class="text-center text-gray-600 mb-8">{{ description }}</p>
    <div :class="gridClasses">
      <TeamCard 
        v-for="person in members" 
        :key="person.id" 
        :person="person" 
        class="person-grid-item"
      />
    </div>
  </div>
</template>

<script>
import TeamCard from './TeamCard.vue'

export default {
  name: 'TeamCardSection',
  components: {
    TeamCard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    members: {
      type: Array,
      required: true
    }
  },
  computed: {
    gridClasses() {
      return this.members.length === 4 ? 'people-grid people-grid-four' : 'people-grid' 
    }
  }
}
</script>
