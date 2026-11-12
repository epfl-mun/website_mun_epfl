<template>
    <section class="hero-home">
      <div class="hero-home__media">
        <img src="/pictures/home/team_fun.jpeg" alt="Comité MUN EPFL" />
        <div class="hero-home__overlay"></div>
      </div>
      <div class="hero-home__content">
        <p class="eyebrow">MUN EPFL <span>·</span> 2027</p>
        <h1 class="hero-title">{{ $t('home.hero.title') }}<br><em>{{ $t('home.hero.titleAccent') }}</em></h1>
        <p class="hero-lead">{{ $t('home.hero.lead') }}</p>
        <div class="flex flex-wrap gap-3 mt-8">
          <RedButton to="#conference" class="hero-button">{{ $t('home.hero.conference') }}</RedButton>
          <a href="#society" class="hero-link">{{ $t('home.hero.discover') }} <span>↗</span></a>
        </div>
      </div>
    </section>

    <section class="orbit-journey" ref="orbitJourney" :style="journeyStyle">
      <div class="orbit-journey__sticky">
        <img src="/pictures/home/orbit-to-epfl.png" alt="Transition de la planète vers le campus EPFL" class="orbit-journey__image" />
        <div class="orbit-journey__veil"></div>
        <div class="orbit-journey__copy">
          <p class="eyebrow">MUN EPFL <span>·</span> 2027</p>
          <h1 class="hero-title">{{ $t('home.hero.title') }}<br><em>{{ $t('home.hero.titleAccent') }}</em></h1>
          <p class="hero-lead">{{ $t('home.hero.lead') }}</p>
          <div class="flex flex-wrap gap-3 mt-8">
            <RedButton to="#conference" class="hero-button">{{ $t('home.hero.conference') }}</RedButton>
            <a href="#society" class="hero-link">{{ $t('home.hero.discover') }} <span>↗</span></a>
          </div>
        </div>
      </div>
    </section>

    <section id="top" class="w-full flex justify-center items-center">
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
    data() {
        return { journeyProgress: 0 }
    },
    computed: {
        journeyStyle() {
            return { '--journey-progress': this.journeyProgress }
        },
        sortedEvents() {
            return eventsData
                .filter(event => event.positionFirstPage && event.status !== 'upcoming')
                .sort((a, b) => a.positionFirstPage - b.positionFirstPage);
        }
    },
    mounted() {
        this.updateJourney()
        window.addEventListener('scroll', this.updateJourney, { passive: true })
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
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateJourney)
    },
    methods: {
        updateJourney() {
            const section = this.$refs.orbitJourney
            if (!section) return
            const distance = section.offsetHeight - window.innerHeight
            const progress = distance > 0 ? (window.scrollY - section.offsetTop) / distance : 0
            this.journeyProgress = Math.min(1, Math.max(0, progress))
        }
    }
}
</script>

<style scoped>
.hero-home { position: relative; min-height: calc(100vh - 5rem); overflow: hidden; background: #111827; color: white; }
.hero-home__media, .hero-home__media img, .hero-home__overlay { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero-home__media img { object-fit: cover; object-position: center 30%; animation: hero-image-in 1.2s cubic-bezier(.2,.7,.2,1) both; }
.hero-home__overlay { background: linear-gradient(90deg, rgba(4, 10, 24, .86), rgba(4, 10, 24, .45) 55%, rgba(4, 10, 24, .12)); }
.hero-home__content { position: relative; z-index: 1; display: flex; min-height: calc(100vh - 5rem); width: min(80rem, calc(100% - 3rem)); margin: auto; flex-direction: column; justify-content: center; padding-bottom: 4rem; animation: hero-in .9s cubic-bezier(.2,.7,.2,1) both; }
.hero-home__content .hero-title { max-width: 78rem; font-size: clamp(3.7rem, 8.5vw, 8.5rem); }
.orbit-journey { height: 190vh; background: #050814; }
.home-anchor-section { scroll-margin-top: 5rem; border-top: 1px solid var(--mun-line); }
.orbit-journey__sticky { position: sticky; top: 0; height: 100vh; min-height: 560px; overflow: hidden; background: #050814; }
.orbit-journey__image { position: absolute; inset: -18vh 0; width: 100%; height: 136%; object-fit: cover; object-position: center top; transform: scale(calc(1 + var(--journey-progress) * 1.65)) translateY(calc(var(--journey-progress) * -18%)); transform-origin: 50% 76%; will-change: transform; }
.orbit-journey__veil { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(4, 8, 20, .82), rgba(4, 8, 20, .28) 58%, rgba(4, 8, 20, .06)), linear-gradient(0deg, rgba(4, 8, 20, .72), transparent 40%); opacity: calc(1 - var(--journey-progress) * .72); }
.orbit-journey__copy { position: absolute; left: max(1.5rem, calc((100vw - 80rem) / 2)); top: 50%; width: min(44rem, calc(100% - 3rem)); color: white; transform: translateY(-50%) translateY(calc(var(--journey-progress) * -28vh)); opacity: calc(1 - var(--journey-progress) * 1.25); will-change: transform, opacity; }
.orbit-journey__copy::after { content: 'SCROLL TO DESCEND'; display: block; margin-top: 5rem; color: rgba(255,255,255,.58); font-size: .68rem; font-weight: 800; letter-spacing: .2em; }
@media (max-width: 640px) { .orbit-journey { height: 165vh; } .orbit-journey__image { inset: -10vh -34vw; width: 168%; height: 120%; } .orbit-journey__copy { top: 54%; } .orbit-journey__copy::after { margin-top: 3rem; } }
@media (prefers-reduced-motion: reduce) { .orbit-journey__image, .orbit-journey__copy { transform: none; opacity: 1; } .orbit-journey { height: 100vh; } .orbit-journey__copy::after { display: none; } }
</style>
