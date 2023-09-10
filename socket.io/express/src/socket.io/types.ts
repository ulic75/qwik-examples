export interface ServerToClientEvents {
  message: (data: { from: string; message: string; time: string }) => void
  name: (name: string) => void
}

export interface ClientToServerEvents {
  message: (message: string) => void
}

export interface InterServerEvents {
  ping: () => void
}

export interface SocketData {
  username: string
}
