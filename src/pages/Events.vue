<template>
<div class="content-shell events-editorial"><header class="section-heading"><span class="section-index">03 / MUN EPFL</span><h1>{{ $t('events.title') }}</h1><p>{{ $t('events.description') }}</p></header><div class="event-list"><EventsLongCard v-for="event in events" :key="event.id" :isUpcoming="false" :id="event.id" :title="event.title[$i18n.locale]" :date="event.date[$i18n.locale]" :location="event.location" :imageUrl="event.image" :description="event.description[$i18n.locale]"/></div></div>
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
            events: eventsData
                .filter(event => event.status !== 'upcoming')
                .sort((a, b) => b.id - a.id)
        }
    },
    setup() {
        seo('events')
    }
}
</script>

