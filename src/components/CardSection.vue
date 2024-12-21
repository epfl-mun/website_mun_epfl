<template>
  <div class="space-y-6">
    <div class="grid gap-6 md:grid-cols-2">
      <Card
        title="Weekly sessions"
        description="Every week, MUN EPFL members meet in a friendly setting to debate. Each debate is always followed by a relaxed aperitif."
      >
        <template #icon>
          <CalendarIcon class="w-6 h-6" />
        </template>
      </Card>
      <Card
        title="Develop oral skills"
        description="Debates allow members to improve their eloquence, negotiation techniques, and communication skills."
      >
        <template #icon>
          <LanguageIcon class="w-6 h-6" />
        </template>
      </Card>
    </div>
    <div class="md:max-w-xl md:mx-auto">
      <Card
        title="International political issues"
        description="Members have the opportunity to debate current and long-standing international political and geopolitical issues."
      >
        <template #icon>
          <GlobeAltIcon class="w-6 h-6" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/LongCard.vue";
import { CalendarIcon, GlobeAltIcon, LanguageIcon } from '@heroicons/vue/24/solid'

export default {
  components: {   
    Card,
    CalendarIcon,
    LanguageIcon,
    GlobeAltIcon
  },
};
</script>
