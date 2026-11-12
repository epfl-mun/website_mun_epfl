<template>
  <section class="department-section content-shell">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold">{{ title }}</h2>
        <p v-if="description" class="mt-3 text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="department-grid">
        <div
          v-for="c in committees"
          :key="c.id"
          class="department-card"
        >
        <div class="w-full h-56">
          <LazyImage
          :src="c.groupImage"
          :alt="committeeName(c)"
          class=""
          loading="lazy"
          />
        </div>

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
import LazyImage from "./LazyImage.vue";
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
  },
  components: {
    LazyImage
  }
};
</script>
