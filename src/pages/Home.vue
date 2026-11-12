<template>
    <section id="top" class="hero-home">
      <div class="hero-home__content">
        <p class="eyebrow">MUN EPFL <span>·</span> 2027</p>
        <h1 class="hero-title">{{ $t('home.hero.title') }}<br><em>{{ $t('home.hero.titleAccent') }}</em></h1>
        <p class="hero-lead">{{ $t('home.hero.lead') }}</p>
        <div class="flex flex-wrap gap-3 mt-8">
          <RedButton to="#conference" class="hero-button">{{ $t('home.hero.conference') }}</RedButton>
          <a href="#society" class="hero-link">{{ $t('home.hero.discover') }} <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></a>
        </div>
      </div>
      <div class="hero-art"><GlobeArt /></div>
    </section>

    <DiplomacyJourney />

    <section id="introduction" class="w-full flex justify-center items-center">
      <div class="container max-w-4xl flex justify-center flex-col items-center intro-block reveal">
        <p class="section-kicker reveal reveal-delay-1">{{ $t('home.hero.whoWeAre') }}</p>
        <h2 class="text-center font-bold text-4xl sm:text-6xl mb-5 mx-4 reveal reveal-delay-2">
          {{ $t("home.welcome") }}
          </h2>
        <p class="text-center text-lg sm:text-xl mx-8 leading-relaxed text-slate-600 reveal reveal-delay-3">
          <span class="text-red-primary">MUN EPFL</span> {{ $t("home.description") }} 
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-8 mb-2 reveal reveal-delay-4">
            <RedButton to="#society" class="text-lg hover:scale-105">
            {{ $t("home.buttons.association") }}
          </RedButton>
          <RedButton to="#conference">
            {{ $t("home.buttons.conference") }}
          </RedButton>
        </div>
      </div>
    </section>

    <section class="w-full events-section py-20 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="flex items-end justify-between gap-4 mb-8 reveal">
          <div class="text-left">
            <p class="section-kicker">{{ $t('home.hero.onTheCalendar') }}</p>
            <h2 class="font-bold text-4xl sm:text-6xl mt-2 mb-2">
            {{ $t("home.events.title") }}
            </h2>
          </div>
          <RedButton to="#events" class="hidden sm:inline-flex">{{ $t("home.events.button") }} <span class="ml-2">↗</span></RedButton>
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
                <RedButton to="#events" class="sm:hidden">
                    {{ $t("home.events.button") }}
                </RedButton> 
            </div>
        </div>
    </section>

    <main class="home-sections">
      <section id="society" class="home-anchor-section"><Society /></section>
      <section id="conference" class="home-anchor-section"><Conference /></section>
      <section id="events" class="home-anchor-section"><Events /></section>
      <section id="team" class="home-anchor-section"><Team /></section>
      <section id="partners-main" class="home-anchor-section"><Partners /></section>
      <section id="contact" class="home-anchor-section"><Contact /></section>
    </main>
</template>
  
<script>
import DiplomacyJourney from '@/components/DiplomacyJourney.vue';
import GlobeArt from '@/components/GlobeArt.vue';
import RedButton from '@/components/RedButton.vue';
import HomeEventCard from '@/components/HomeEventCard.vue';
import Society from '@/pages/Society.vue';
import Events from '@/pages/Events.vue';
import Team from '@/pages/Team.vue';
import Partners from '@/pages/Partners.vue';
import Contact from '@/pages/Contact.vue';
import Conference from '@/pages/conference/Conference.vue';
import eventsData from '@/assets/events.json';
import { seo } from '@/composables/seo'

export default {
    name: 'HomePage',
    components: {
        DiplomacyJourney,
        GlobeArt,
        RedButton,
        HomeEventCard,
        Society,
        Events,
        Team,
        Partners,
        Contact,
        Conference
    },
    setup() {
        seo('home')
        return {}
    },
    computed: {
        sortedEvents() {
            return eventsData
                .filter(event => event.positionFirstPage && event.status !== 'upcoming' && !event.title.en.toLowerCase().includes('trip'))
                .sort((a, b) => a.positionFirstPage - b.positionFirstPage);
        }
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
    }

}
</script>

<style scoped>
.home-anchor-section { scroll-margin-top: 5rem; border-top: 1px solid var(--mun-line); background: var(--mun-paper); }
.home-anchor-section:nth-child(odd) { background: var(--mun-paper-alt); }
</style>
