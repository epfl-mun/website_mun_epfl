<template>
    <section class="partners">
        <div class="flex flex-col justify-start items-center">
            <div class="w-full py-20 px-10">
                <div class="flex flex-col items-center gap-4">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ $t('partners.title') }}</h1>
                    <p class="text-lg md:text-xl lg:text-2xl max-w-3xl text-center">{{ $t('partners.description') }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8 lg:gap-12 lg:flex-row items-center justify-center p-4 md:p-10 bg-gray-100">
            <a v-for="partner in partners" v-bind:key="partner.name" class="lg:w-1/4 min-w-lg w-full max-w-lg cursor-pointer" :href="partner.url" target="_blank">
                <div class="flex flex-col items-center gap-4 w-full">
                    <div class="w-full">
                        <img :src="'/pictures/partners/' + partner.picture" alt="committee on EPFL logo" class="w-full h-full object-cover" />
                    </div>
                    <h2 class="text-4xl">{{ partner.name }}</h2>
                    <p>{{ partner.description[$i18n.locale] }}</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
import partners from '../assets/partners.json';
// import { seo } from '@/composables/seo';


export default {
  name: 'PartnersPage',

  data() {
    return {
      partners
    }
  }
//   setup() {
//     seo('partners')
//   }
}

</script>