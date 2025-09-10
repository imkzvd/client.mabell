import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  name: 'artist-module',
  configKey: 'artist-module',
  setup (options: any, nuxt: Nuxt) {

    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components')
      })
    })

    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'artist',
        path: '/artist/:id',
        file: resolve(__dirname, './pages/[id]/index.vue')
      })
    })
  }
})