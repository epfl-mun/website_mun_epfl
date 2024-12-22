<template>
  <div class="px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center">{{ title }}</h2>
    <p v-if="description" class="text-center text-gray-600 mb-8">{{ description }}</p>
    <div :class="gridClasses">
      <TeamCard 
        v-for="person in members" 
        :key="person.id" 
        :person="person" 
        :class="['w-full max-w-sm', cardClasses(person)]"
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
      const baseClasses = 'grid gap-6 justify-items-center'
      const length = this.members.length

      if (length === 1) {
        return `${baseClasses} grid-cols-1`
      } else if (length === 2) {
        return `${baseClasses} grid-cols-1 md:grid-cols-2`
      } else {
        return `${baseClasses} grid-cols-1 md:grid-cols-2 xl:grid-cols-3`
      }
    }
  },
  methods: {
    cardClasses(person) {
      const isLastItem = this.members.indexOf(person) === this.members.length - 1;
      if (this.members.length === 3 && isLastItem) {
        return 'md:col-span-2 md:justify-self-center xl:col-span-1'
      }
      return ''
    }
  }
}
</script>
