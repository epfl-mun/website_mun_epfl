<template>
  <section class="relative">
    <div style="height: 600px; width: 100%;" class="relative p-1">
      <LazyImage src="/pictures/events/conference2024.jpeg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%" class="rounded-xl overflow-hidden" />
      <div v-show="!loading" class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md opacity-90 lg:max-w-3xl w-3/4 p-10">
        <h1 class="text-red-primary font-bold lg:text-7xl text-3xl mb-5">{{ $t('conference.title') }}</h1>
        <p class="text-center text-lg mb-5">{{ $t('conference.description1') }}</p>
        <p class="text-center text-lg">{{ $t('conference.description2') }}</p>
        <nav class="shadow-md py-4 justify-center items-center border-gray-300 border-t mt-3">
          <div class="max-w-7xl mx-auto px-4">
            <ul class="flex flex-col lg:flex-row lg:gap-8 gap-2 justify-center items-center text-xl font-bold underline">
              <li v-for="section in sections" :key="section.id" class="items-center justify-center">
                <a :href="'#' + section.id" class="text-center">{{ section.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </section>


  <section class="bg-red-primary">
    <div class="bg-red-primary py-6 flex flex-col items-center justify-normal">
      <h2 class="text-6xl font-bold text-white mb-10">{{ $t('conference.epflmunIs') }}</h2>
      <div class="flex flex-col lg:flex-row gap-6 max-w-7xl">
        <div v-for="element in elements" :key="element.title" class="flex-1">
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full bg-white p-2">
              <LazyImage :src="`/svg/conference/${element.svg}.svg`" alt="icon" width="40px" height="40px" />
            </div>
            <h3 class="text-xl text-gray-100">{{ $t(`conference.elements[${elements.indexOf(element)}].title`) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-t-2 border-solid border-gray-300 my-10">

  <section id="participate">
    <div class="py-6 flex flex-col items-center justify-normal">
      <h2 class="text-6xl font-bold mb-5 text-center">{{ $t('conference.participate2025') }}</h2>
      <a href="https://mymun.com/conferences/EPFLMUN-2025/" target="_blank" rel="noopener noreferrer" class="bg-red-primary text-white font-bold px-8 py-4 rounded-full mt-4 duration-300 hover:scale-105 hover:bg-red-700 text-2xl">{{ $t('conference.registerNow') }}</a>
    </div>
  </section>

  <section>
    <div class="py-6 flex flex-col items-center justify-normal hover:cursor-pointer">
      <a class="max-w-7xl" href="https://mymun.com/conferences/EPFLMUN-2025/" target="_blank" rel="noopener noreferrer">
        <LazyImage src="/pictures/events/screen_mymun.png" alt="image" class="w-full" />
      </a>
    </div>
  </section>

  <hr class="border-t-2 border-solid border-gray-300 my-10">


  <section id="partners">
    <div class="flex flex-col items-center justify-center py-7 px-5">
      <h2 class="text-6xl font-bold mb-10 text-center">{{ $t('conference.partners') }}</h2>
      <div class="flex flex-col lg:flex-row gap-6 max-w-7xl w-full pb-5 overflow-x-scroll overflow-y-hidden">
        <div v-for="partner in partners" :key="partner.title" class="flex-1">
          <a class="flex flex-col items-center gap-4" :href="partner.url" target="_blank" rel="noopener noreferrer">
            <div class="rounded-full p-2">
              <LazyImage :src="`/pictures/conf_2025/partners/${partner.image}.png`" :alt="partner.title" width="150px" height="150px" />
            </div>
            <h3 class="text-xl text-black">{{ $t(`conference.partnersList[${partners.indexOf(partner)}].title`) }}</h3>
          </a>
        </div>
      </div>
    </div>
  </section>

  <hr class="border-t-2 border-solid border-gray-300 my-10">

  <section class="flex flex-col items-center justify-center py-7 text-left" id="maps">
    <h2 class="text-6xl font-bold mb-10 text-center">{{ $t('conference.informationTitle') }}</h2>
    <article class="w-full m-auto flex flex-col items-center max-w-7xl px-5">
      <h3 class="text-3xl mb-5">{{ $t('conference.informationPlaces') }}</h3>
      <div class="flex flex-col items-start gap-1">
        <div class="flex gap-4 items-center">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png" class="object-fill w-4 h-auto"/>
          <p>{{ $t('conference.places.BC') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png" class="object-fill w-4 h-auto"/>
          <p>{{ $t('conference.places.MX') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" class="object-fill w-4 h-auto"/>
          <p>{{ $t('conference.places.starling') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" class="object-fill w-4 h-auto"/>
          <p>{{ $t('conference.places.trainStations') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="26" height="26" fill="rgba(0, 160, 220, 0.5)" stroke="#0096c7" stroke-width="2" />
          </svg>
          <p>{{ $t('conference.places.BC') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="26" height="26" fill="rgba(34, 17, 31, 0.5)" stroke="black" stroke-width="2" />
          </svg>          
          <p>{{ $t('conference.places.MX') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="26" height="26" fill="rgba(0, 0, 255, 0.5)" stroke="blue" stroke-width="2" />
          </svg>
          <p>{{ $t('conference.places.campus') }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="26" height="26" fill="rgba(83, 255, 17, 0.5)" stroke="green" stroke-width="2" />
          </svg>
          <p>{{ $t('conference.places.cityCenter') }}</p>
        </div>
      </div>
      <div class="max-w-7xl w-full rounded-lg overflow-hidden my-5">
        <MapConference />
      </div>
    </article>

    <article class="max-w-7xl mx-5">
      <h3 class="text-3xl mb-5">{{ $t('conference.transportations') }}</h3>
      <div class="flex flex-col items-start text-left gap-2">
        <div>
          <h4 class="text-xl">{{ $t('conference.generalInformationTitle') }}</h4>
          <p>
            {{ $t('conference.generalInformationContent') }}
            <a class="underline" href="https://sbb.ch" target="_blank" rel="noopener noreferrer">SBB app</a>
          </p>
        </div>

        <div>   
          <h4 class="text-xl mb-1">{{ $t('conference.mainTransportation') }}</h4>
          <div class="flex flex-col gap-2">

            <div class="flex items-center gap-2">
              <svg width="40" height="30" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="15" x2="30" y2="15" stroke="blue" stroke-width="2" />
              </svg>
              <p>{{ $t('conference.LausanneGareEPFL') }}</p>
            </div>

            <div class="flex items-center gap-2">
              <svg width="40" height="30" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="15" x2="30" y2="15" stroke="red" stroke-width="2" />
              </svg>
              <p>{{ $t('conference.RenensVDGareEPFL') }}</p>
            </div>

            <div class="flex items-center gap-2">
              <svg width="40" height="30" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="15" x2="30" y2="15" stroke="green" stroke-width="2" />
              </svg>
              <p>{{ $t('conference.EPFLMetroBC') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl w-full rounded-lg overflow-hidden my-5">
        <MapTransports />
      </div>
    </article>
  </section>

  <hr class="border-t-2 border-solid border-gray-300 my-10">

  <section class="flex flex-col items-center justify-center py-7 text-left" id="timetable">
    <h2 class="text-6xl font-bold mb-10 text-center">{{ $t('conference.timetable.title') }}</h2>
    <article class="m-auto flex flex-col px-5 gap-6">
      <div>

        <h3 class="text-3xl mb-5">{{ $t('conference.timetable.Friday') }}</h3>
        <div class="flex flex-col items-start gap-1">
          <p><strong>14h-15h: </strong>{{ $t('conference.timetable.welcoming') }}</p>
          <p><strong>15h-16h: </strong>{{ $t('conference.timetable.openingCeremony') }}</p>
          <p><strong>16h-17h30: </strong>{{ $t('conference.timetable.Workshop') }}</p>
          <p><strong>21h-2h: </strong>{{ $t('conference.timetable.FirstSocial') }}</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl mb-5">{{ $t('conference.timetable.Saturday') }}</h3>
        <div class="flex flex-col items-start gap-1">
          <p><strong>8h30-9h: </strong>{{ $t('conference.timetable.breakfast') }}</p>
          <p><strong>9-12h30: </strong>{{ $t('conference.timetable.debate') }}</p>
          <p><strong>12h30-13h30: </strong>{{ $t('conference.timetable.lunch') }}</p>
          <p><strong>13h30-17h: </strong>{{ $t('conference.timetable.debate') }}</p>
          <p><strong>20h-3h: </strong>{{ $t('conference.timetable.SecondSocial') }}</p>
        </div>
      </div>

      <div>
        <h3 class="text-3xl mb-5">{{ $t('conference.timetable.Sunday') }}</h3>
        <div class="flex flex-col items-start gap-1">
          <p><strong>8h30-9h: </strong>{{ $t('conference.timetable.breakfast') }}</p>
          <p><strong>9h-13h: </strong>{{ $t('conference.timetable.debate') }}</p>
          <p><strong>13h-14h: </strong>{{ $t('conference.timetable.lunch') }}</p>
          <!-- <p><strong>14h-14h: </strong>{{ $t('conference.timetable.endOfComittee') }}</p> -->
          <p><strong>14h-15h: </strong>{{ $t('conference.timetable.closingCeremony') }}</p>
        </div>
      </div>

    </article>
  </section>

</template>

<script>
import LazyImage from '@/components/LazyImage.vue';
import 'vue3-carousel/dist/carousel.css';
import { seo } from '@/composables/seo';
import MapConference from '@/components/maps/MapConference.vue';
import MapTransports from '@/components/maps/MapTransports.vue';

export default {
  name: 'Conference',
  components: {
    LazyImage,
    MapConference,
    MapTransports
  },
  setup(){
    seo('conference')
  },
  data() {
    return {
      elements: [
        {
          svg: "world",
          title: "150+ international participants",
        },
        {
          svg: "star",
          title: "6 commissions in French and English",
        },
        {
          svg: "happy_face",
          title: "Honor guests",
        },
        {
          svg: "lightning",
          title: "Post-conference opportunities",
        },
        {
          svg: "calendar",
          title: "3 incredible days, from March 21 to 23",
        },
      ],
      images: [
        '/pictures/conference-not-debate/rolex_welcoming.jpg',
        '/pictures/conference-not-debate/swisstech_talk.jpg',
        '/pictures/conferences/reunion_with_6_people.jpg',
        '/pictures/conference-not-debate/rolex_speaker_front.jpg',
      ],
      partners: [
        {
          image: "ZuMUN",
          url : "https://zumun.ch/",
        },
        {
          image: "LakeMUN",
          url : "https://www.lakemun-conference.com/",
        },
        {
          image : "GiMUN",
          url : "https://www.gimun.org/?lang=en",
        },
        {
          image : "KAMUN",
          url : "https://kamun.org/",
        },
        {
          image : "LYONMUN",
          url : "https://www.univ-lyon3.fr/lyon-mun",
        },
        {
          image : "IEUMUN",
          url : "https://ieumun.com/ieumun/",
        },
        {
          image : "fMUN",
          url : "https://www.fdnu.fr/",
        },
        {
          image : "UABMUN",
          url : "https://www.uab.cat/web/life-on-campus/participation/join-the-debate/uabmun-1345840008865.html",
        },
        {
          image: "SIMUN",
          url : "https://fondation.pantheonsorbonne.fr/evenements/sorbonne-international-model-united-nations-simun",
        },
        {
          image : "YEREMUN",
          url : "https://www.yeremun.com/",
        }
      ],
      sections: [
          { id: 'participate', name: 'Participate' },
          { id: 'partners', name: 'Partners' },
          { id: 'maps', name: 'Transports' },
          { id : "timetable", name : "Timetable"}
        ],
    };
  }
}
</script>