import type { Session } from '@auth/core/types'
import { component$ } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get('session')
  if (!session || new Date(session.expires) < new Date())
    throw event.redirect(302, `/api/auth/signin?callbackUrl=${encodeURIComponent(event.url.href)}`)
}

export default component$(() => <h1>Congrats! You are logged in.</h1>)
