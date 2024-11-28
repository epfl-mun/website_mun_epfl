<template>
    <div class="wrap max-w-5xl m-auto flex flex-col items-center justify-center">
        <h2 class="text-4xl font-bold mb-5">Events</h2>
        <div class="events-container grid grid-cols-3">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
    </div>
</template>