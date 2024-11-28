<template>
    <div class="flex flex-col items-center justify-start">
        <div class="mt-20" style="max-width : 1600px">
            <div class="mb-5">
                <h2 class="text-5xl font-bold">The team</h2>
                <p class="text-5xl">-</p>
                <h3 class="text-xl">Meet the team that makes MUN EPFL work.</h3>

            </div>
            
            <div class="events-container grid grid-cols-4">
                <TeamCard v-for="person in team" :key="person.id" :person="person" />
            </div>
        </div>
    </div>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue';
import team from '../assets/team.json'

export default {
  name: 'TeamPage',
  components: {
    TeamCard
  },
  data() {
    return {
      team
    }
  }
}
</script>