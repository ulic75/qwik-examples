import type { Server, Socket } from 'socket.io'

import type {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from './types'

export default (
  io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>,
  socketEvents: (io: Server, socket: Socket) => void,
) => {
  io.on('connection', (socket) => {
    const username = `User ${Math.round(Math.random() * 999999)}`
    socket.data.username = username
    socket.emit('name', username)

    socketEvents(io, socket)
  })
}
