import type { Provider } from '@auth/core/providers'
import CredentailsProvider from '@auth/core/providers/credentials'
import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import { serverAuth$ } from '@builder.io/qwik-auth'

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
  ({ env }) => ({
    secret: env.get('PRIVATE_AUTH_SECRET'),
    trustHost: true,
    session: {
      maxAge: 60,
    },
    providers: [
      CredentailsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Username', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
        authorize: async (credentials) => {
          // Test your credentials here and return a user object
          // if (credentials.username = 'test' && credentials.password === 'pass') {}
          const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (user)
            return user
          else
            return null
        },
      }),
      GitHub({
        clientId: env.get('PRIVATE_GITHUB_ID')!,
        clientSecret: env.get('PRIVATE_GITHUB_SECRET')!,
      }),
      Google({
        clientId: env.get('PRIVATE_GOOGLE_ID')!,
        clientSecret: env.get('PRIVATE_GOOGLE_SECRET')!,
      }),
    ] as Provider[],
  }),
)
