import {
  $,
  type NoSerialize,
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { type Socket, io } from 'socket.io-client'

import type { ClientToServerEvents, ServerToClientEvents } from '~/socket.io/types'

export default component$(() => {
  const messages = useSignal<{ message: string; from: string; time: string }[]>([
    { message: 'Welcome!', from: 'Server', time: new Date().toLocaleString() },
  ])
  const username = useSignal<string>()
  const textField = useSignal('')
  const socket = useSignal<NoSerialize<Socket<ServerToClientEvents, ClientToServerEvents>>>()

  useVisibleTask$(() => {
    try {
      socket.value = noSerialize(io())

      socket.value?.on('name', name => (username.value = name))

      socket.value?.on(
        'message',
        newMessage => (messages.value = [...messages.value, newMessage]),
      )
    } catch {
      console.log('socket.io connection failure')
    }
  })

  const sendMessage = $((message: string) => {
    socket.value?.emit('message', message)
    textField.value = ''
  })

  return (
    <div class="h-screen w-screen bg-zinc-800">
      <div class="mx-auto h-full max-w-md w-full flex flex-col bg-zinc-500">
        <header class="flex shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-700 px-6 py-4 text-white">
          <span class="text-xl font-bold">Messaging App</span>
          <span>{username.value}</span>
        </header>
        <div class="h-full w-full overflow-auto p-4">
          {messages.value.map(message => (
            <div
              key={message.time}
              class={`rounded-xl px-4 py-3 my-3 w-fit ${
                message.from === username.value ? 'bg-slate-400 ml-auto' : 'bg-slate-300'
              }`}
            >
              <span class="flex items-center space-between gap-4">
                <b>{message.from}:</b>
              </span>
              {message.message}
              <i class="flex items-center pt-1 text-[0.5rem]">{message.time}</i>
            </div>
          ))}
        </div>
        <form
          class="flex shrink-0 items-center border-zinc-800 bg-zinc-700 px-6 py-4 text-white border-t"
          onSubmit$={() => sendMessage(textField.value)}
          preventdefault:submit
        >
          <input
            type="text"
            bind:value={textField}
            placeholder="Type something..."
            class="w-full border-none bg-transparent px-4 py-3"
          />
          <button type="submit" class="shrink-0 px-4 py-3 border border-white rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
