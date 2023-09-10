import type { Server as HttpServer } from 'node:http'

import { Server } from 'socket.io'

import serverEvents from './server-events'
import socketEvents from './socket-events'

export default function injectSocketIO(httpServer: HttpServer) {
  const io = new Server(httpServer)

  serverEvents(io, socketEvents)

  console.log('SocketIO injected')
}
