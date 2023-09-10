import type { Plugin } from 'vite'

import injectSocketIO from '../src/socket.io/handler'

export function vitePluginSocketIO(): Plugin {
  return {
    name: 'socketIOServer',
    configureServer({ httpServer }) {
      if (!httpServer)
        return
      injectSocketIO(httpServer)
    },
  }
}
