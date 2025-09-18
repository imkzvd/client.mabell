import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
  name: 'player-module',
  configKey: 'player-module',
  setup (options: any, nuxt: Nuxt) {

    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
        pathPrefix: false,
      })
    })
  }
})