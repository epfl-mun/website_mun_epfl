import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
export function seo(path) {
  const { t } = useI18n()

  const domain = 'https://mun-epfl.ch'

  const titleSuffix = !path.includes('conference') && path !== 'home' ? ' | MUN EPFL' : ''
  
  const defaultMeta = {
    title: t(`seo.${path}.title`) + titleSuffix,
    meta: [
      {
        name: 'description',
        content: t(`seo.${path}.description`)
      },
      {
        property: 'og:title',
        content: t(`seo.${path}.title`) + titleSuffix
      },
      {
        property: 'og:description',
        content: t(`seo.${path}.description`)
      },
      {
        name: 'keywords',
        content: t(`seo.keywords`)
      },
      {
        name: 'language',
        content: 'fr-CH, en-CH'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: `${domain}${window.location.pathname}`
      }
    ]
  }

  return useHead(defaultMeta)
}