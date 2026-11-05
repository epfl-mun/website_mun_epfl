<template>
    <section class="relative w-full hero-shell">
      <div class="relative w-full min-h-[560px] sm:min-h-[650px]">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="image-overlay h-full w-full">
            <img src="/pictures/home/team_fun.jpeg" alt="MUN EPFL committee" class="hero-image w-full h-full object-cover object-[center_30%]"/>
            <div class="overlay absolute inset-0"></div>
          </div>        
          <div class="absolute inset-0 flex items-center justify-center px-6">
            <div class="hero-copy max-w-5xl w-full text-left text-white">
              <p class="eyebrow hero-item hero-item-1">MUN EPFL <span>·</span> 2027</p>
              <h1 class="hero-title hero-item hero-item-2">Diplomacy starts<br><em>with a voice.</em></h1>
              <p class="hero-lead hero-item hero-item-3">Débats. Rencontres. Perspectives internationales.</p>
              <div class="flex flex-wrap gap-3 mt-8 hero-item hero-item-4">
                <RedButton to="/conference" class="hero-button">EPFLMUN 2027</RedButton>
                <router-link to="/society" class="hero-link">Découvrir l’association <span>↗</span></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center items-center">
      <div class="container max-w-4xl flex justify-center flex-col items-center intro-block reveal">
        <p class="section-kicker reveal reveal-delay-1">WHO WE ARE</p>
        <h2 class="text-center font-bold text-4xl sm:text-6xl mb-5 mx-4 reveal reveal-delay-2">
          {{ $t("home.welcome") }}
          </h2>
        <p class="text-center text-lg sm:text-xl mx-8 leading-relaxed text-slate-600 reveal reveal-delay-3">
          <span class="text-red-primary">MUN EPFL</span> {{ $t("home.description") }} 
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-8 mb-2 reveal reveal-delay-4">
          <RedButton to="/society" class="text-lg hover:scale-105">
            {{ $t("home.buttons.association") }}
          </RedButton>
          <RedButton to="/conference">
            {{ $t("home.buttons.conference") }}
          </RedButton>
        </div>
      </div>
    </section>

    <section class="w-full events-section py-20 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="flex items-end justify-between gap-4 mb-8 reveal">
          <div class="text-left">
            <p class="section-kicker">ON THE CALENDAR</p>
            <h2 class="font-bold text-4xl sm:text-6xl mt-2 mb-2">
            {{ $t("home.events.title") }}
            </h2>
          </div>
          <RedButton to="/events" class="hidden sm:inline-flex">{{ $t("home.events.button") }} <span class="ml-2">↗</span></RedButton>
          </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-2">
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
                <RedButton to="/events" class="sm:hidden">
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
import { seo } from '@/composables/seo'

export default {
    name: 'HomePage',
    components: {
        RedButton,
        HomeEventCard
    },
    setup() {
        seo('home')
        return {}
    },
    mounted() {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    revealObserver.unobserve(entry.target)
                }
            })
        }, { threshold: 0.12 })

        document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    },
    computed: {
        sortedEvents() {
            return eventsData
                .filter(event => event.positionFirstPage && event.status !== 'upcoming')
                .sort((a, b) => a.positionFirstPage - b.positionFirstPage);
        }
    }
}
</script>
