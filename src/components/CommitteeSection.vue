<template>
  <section class="px-6 md:px-10">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold">{{ title }}</h2>
        <p v-if="description" class="mt-3 text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="c in committees"
          :key="c.id"
          class="rounded-2xl overflow-hidden shadow bg-white/5 border border-white/10"
        >
          <img
            :src="c.groupImage"
            :alt="committeeName(c)"
            class="w-full h-56 object-cover"
            loading="lazy"
          />

          <div class="p-4">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-xl font-semibold">
                {{ committeeName(c) }}
              </h3>
              <span v-if="c.year" class="text-sm opacity-70">
                {{ c.year }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CommitteeSection",
  props: {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    committees: { type: Array, default: () => [] }
  },
  methods: {
    committeeName(c) {
      const locale = this.$i18n?.locale || "en";
      // fallback si jamais fr/en manque
      return (c?.name && (c.name[locale] || c.name.en || c.name.fr)) || "";
    }
  }
};
</script>
