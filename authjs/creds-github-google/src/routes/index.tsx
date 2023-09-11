import { component$ } from '@builder.io/qwik'
import { type DocumentHead, Form, Link } from '@builder.io/qwik-city'

import { useAuthSession, useAuthSignin, useAuthSignout } from './plugin@auth'

export default component$(() => {
  const session = useAuthSession()
  const login = useAuthSignin()
  const logout = useAuthSignout()

  return (
    <>
      {session.value
        ? (
            <>
              <h1>Hi {session.value.user?.name}</h1>
              <p>
                Can't wait to see what you build with qwik!
                <br />
                Happy coding.
              </p>
              <p>
                <Link href="/protected/">View Proteted Route</Link>
              </p>
              {/* Form Action logout */}
              <Form action={logout}>
                <button type="submit">Log Out Action</button>
              </Form>
              {/* Programatic logout */}
              <button onClick$={() => logout.submit({})}>Log Out</button>
            </>
          )
        : (
            <>
              <h1>Not Logged in</h1>
              {/* Form Action login */}
              <Form action={login}>
                <button type="submit">Log In Action</button>
              </Form>
              {/* Programatic login */}
              <button onClick$={() => login.submit({})}>Log In</button>
            </>
          )}
    </>
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
