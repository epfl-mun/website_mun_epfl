<template>
    <footer class="flex flex-col justify-center items-center py-6 px-6 gap-6 border-t border-gray-200">

        <div class="text-gray-600 text-sm text-center">La Coupole CO 116, Case Postale Station 10, 1015 Lausanne, Suisse</div>

        <div class="flex flex-col items-center gap-4">
            <div class="flex items-center justify-center gap-6 font-bold text-base text-gray-600">
                <a v-for="link in socialLinks" 
                   :key="link.name" 
                   :href="link.url" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="h-6"
                >
                    <img :src="`/svg/socialLinks/${link.name.toLowerCase()}.svg`"
                         :alt="link.name"
                         class="h-full"
                    />
                </a>
            </div>
            <a href="/other/statuts-2026.pdf"
               target="_blank"
               rel="noopener noreferrer"
               class="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
                {{ $t('footer.status') }}
            </a>
        </div>

        <div class="text-gray-500 text-xs">
            © 2004-2027 MUN EPFL. {{ $t('footer.allRightsReserved') }}
        </div>
    </footer>
</template>

<script>
import socialLinks from '@/assets/socialLinks.json';

export default {
    data() {
        return {
            socialLinks: socialLinks
        }
    }

}
</script>
