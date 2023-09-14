import fs from 'node:fs'

import { betterSqlite3 } from '@lucia-auth/adapter-sqlite'
import { github } from '@lucia-auth/oauth/providers'
import sqlite from 'better-sqlite3'
import { lucia } from 'lucia'
import { qwik } from 'lucia/middleware'

const db = sqlite(':memory:')
db.exec(fs.readFileSync('schema.sql', 'utf8'))

export const auth = lucia({
  adapter: betterSqlite3(db, {
    user: 'user',
    session: 'user_session',
    key: 'user_key',
  }),
  // eslint-disable-next-line n/prefer-global/process
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  middleware: qwik(),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      username: data.username,
    }
  },
})

export const githubAuth = github(auth, {
  // eslint-disable-next-line n/prefer-global/process
  clientId: process.env.GITHUB_CLIENT_ID ?? '',
  // eslint-disable-next-line n/prefer-global/process
  clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
})

export type Auth = typeof auth
