<template>
    <footer class="site-footer flex flex-col justify-center items-center py-14 px-6 gap-7 text-white">

        <div class="footer-address text-sm text-center">La Coupole CO 116, Case Postale Station 10, 1015 Lausanne, Suisse</div>

        <div class="flex flex-col items-center gap-4">
            <div class="flex items-center justify-center gap-6 font-bold text-base footer-socials">
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
               class="footer-button inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white"
            >
                {{ $t('footer.status') }}
            </a>
        </div>

        <div class="footer-legal text-xs">
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

<style scoped>
.site-footer { background: var(--mun-ink); }
.footer-address { color: rgba(255,255,255,.62); letter-spacing: .04em; }
.footer-socials img { opacity: .72; transition: opacity .35s ease-in-out, transform .35s ease-in-out; }
.footer-socials a:hover img { opacity: 1; transform: translateY(-3px); }
.footer-button { border: 1px solid rgba(255,255,255,.48); letter-spacing: .12em; text-transform: uppercase; transition: background .35s ease-in-out, color .35s ease-in-out; }
.footer-button:hover { background: var(--mun-red); border-color: var(--mun-red); }
.footer-legal { color: rgba(255,255,255,.34); }
</style>
