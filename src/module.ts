import { fileURLToPath } from 'url'
import { join } from 'path'
import { defineNuxtModule, createResolver, addLayout } from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const vueTemplatesDir = fileURLToPath(new URL('./runtime/templates', import.meta.url))
    addLayout({
      src: resolver.resolve(vueTemplatesDir, 'my-layout.vue'),
      filename: join('demo', 'my-layout.vue')
    }, 'my-layout')
  }
})
