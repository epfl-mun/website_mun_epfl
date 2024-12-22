<template>

    <div class="w-full p-10 pb-4">
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ $t('events.title') }}</h1>
            <p class="text-lg md:text-xl lg:text-2xl max-w-3xl text-center">{{ $t('events.description') }}</p>
        </div>
    </div>
    
    <div class="flex flex-col items-center justify-start w-full px-10 lg:px-20 mx-auto pb-4">
        <EventsLongCard
            v-for="event in events"
            :key="event.id"
            :id="event.id"
            :title="event.title[$i18n.locale]"
            :date="event.date[$i18n.locale]"
            :location="event.location"
            :imageUrl="event.image"
            :description="event.description[$i18n.locale]"
        />
    </div>
</template>

<script>
import EventsLongCard from '@/components/EventsLongCard.vue';
import eventsData from '@/assets/events.json';
import { seo } from '@/composables/seo';

export default {
    name: 'HomePage',
    components: {
        EventsLongCard
    },
    data() {
        return {
            events: eventsData.sort((a, b) => b.id - a.id)
        }
    },
    setup() {
        seo('events')
    }
}
</script>

