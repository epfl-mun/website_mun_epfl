<template>
    <section class="relative w-full">
      <div class="relative w-full pt-[35%] hidden sm:block">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="image-overlay h-full w-full">
            <img src="/pictures/team/team_fun_on_logo.jpg" alt="committee on EPFL logo" class="w-full h-full object-cover object-[center_30%]"/>
            <div class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          </div>        
          <img v-show="!loading" src="/pictures/logos/logo-mainpage.png" alt="Logo" class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5">
        </div>
      </div>

      <div class="relative w-full pb-[40%] sm:hidden">
        <div class="absolute flex items-center justify-center h-full w-full">
            <div class="relative rounded-2xl m-6 mt-16 overflow-hidden w-full h-full">
              <img src="/pictures/team/team_fun_on_logo.jpg" alt="committee on EPFL logo" class="absolute h-full w-full object-cover"/>
              <div class="absolute inset-0 bg-black opacity-70"></div>
              <img src="/pictures/logos/logo-mainpage.png" alt="Logo" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5">
            </div>
        </div>
      </div>
     
    </section>

    <section class="w-full flex justify-center items-center">
      <div class="container max-w-3xl flex justify-center flex-col items-center">
        <h1 class="text-center font-bold text-5xl sm:text-6xl pt-12 sm:pt-6 mb-4 mx-4">
          {{ $t("home.welcome") }}
        </h1>
        <p class="text-center text-xl mx-8">
          <span class="text-red-primary">MUN EPFL</span> {{ $t("home.description") }} 
        </p>

        <div class="flex gap-4 my-6">
          <RedButton to="/society" class="text-lg">
            {{ $t("home.buttons.association") }}
          </RedButton>
          <RedButton to="/conference">
            {{ $t("home.buttons.conference") }}
          </RedButton>
        </div>
      </div>
    </section>

    <section class="w-full bg-gray-100 py-4 px-6">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-center font-bold text-4xl sm:text-6xl mt-2 mb-4 mx-4">
            {{ $t("home.events.title") }}
          </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <HomeEventCard v-for="event in sortedEvents" 
                    :key="event.id" 
                    :id="event.id" 
                    :title="event.title[$i18n.locale]" 
                    :date="event.date[$i18n.locale]" 
                    :location="event.location" 
                    :description="event.description[$i18n.locale]"
                    :imageUrl="event.image" />
            </div>
            <div class="flex justify-center pt-2">
                <RedButton to="/events">
                    {{ $t("home.events.button") }}
                </RedButton> 
            </div>
        </div>
    </section>
</template>
  
<script>
import RedButton from '@/components/RedButton.vue';
import HomeEventCard from '@/components/HomeEventCard.vue';
import eventsData from '@/assets/events.json';

export default {
    name: 'HomePage',
    components: {
        RedButton,
        HomeEventCard
    },
    computed: {
        sortedEvents() {
            return eventsData
                .filter(event => event.positionFirstPage)
                .sort((a, b) => a.positionFirstPage - b.positionFirstPage);
        }
    }
}
</script>
