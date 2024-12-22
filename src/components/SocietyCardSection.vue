<template>
  <div class="space-y-6">
    <div class="grid gap-6 md:grid-cols-2">
      <SocietyCard
        :title="$t('society.cards.0.title')"
        :description="$t('society.cards.0.description')"
      >
        <template #icon>
          <CalendarIcon class="w-6 h-6" />
        </template>
      </SocietyCard>
      <SocietyCard
        :title="$t('society.cards.1.title')"
        :description="$t('society.cards.1.description')"
      >
        <template #icon>
          <LanguageIcon class="w-6 h-6" />
        </template>
      </SocietyCard>
    </div>
    <div class="md:max-w-xl md:mx-auto">
      <SocietyCard
        :title="$t('society.cards.2.title')"
        :description="$t('society.cards.2.description')"
      >
        <template #icon>
          <GlobeAltIcon class="w-6 h-6" />
        </template>
      </SocietyCard>
    </div>
  </div>
</template>

<script>
import SocietyCard from "@/components/SocietyCard.vue";
import { CalendarIcon, GlobeAltIcon, LanguageIcon } from '@heroicons/vue/24/solid'

export default {
  components: {   
    SocietyCard,
    CalendarIcon,
    LanguageIcon,
    GlobeAltIcon
  },
};
</script>
