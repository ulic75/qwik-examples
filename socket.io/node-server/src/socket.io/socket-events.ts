import type { Server, Socket } from 'socket.io'

import type {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from './types'

export default async (
  io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>,
  socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>,
) => {
  console.log('socket.io - connection')

  socket.on('message', message =>
    io.emit('message', { from: socket.data.username, message, time: new Date().toLocaleString() }),
  )

  socket.on('disconnect', () => console.log(`socket.io - socket.id \`${socket.id}\` disconnected`))
}
