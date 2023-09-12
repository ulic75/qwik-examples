# Lucia Authentication with Github

- [Qwik Docs](https://qwik.builder.io/)
- [Lucia](https://lucia-auth.com/)

---

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── src/
│   ├── auth/
│   │   └── lucia.ts
│   ├── routes/
│   │   ├── signin/
│   │   │   ├── github/
│   │   │   │   ├── callback/
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   ├── index.tsx
│   │   └── ...
│   └── app.d.ts
├── .env.example
├── schema.sql
└── ...
```

- `src/auth/lucia.ts`: Sets up the the lucia authentication library and exports `auth` and `githubAuth` which are used for authentication

- `src/routes/signin/index.tsx`: Basic signin page, prompting to sign in to GitHub

- `src/routes/signin/github/index.ts`: Request Handler which generates authorization url and redirects to GitHub for authentication

- `src/routes/signin/github/callback.ts`: Request Handler which validates the authentication code/state return by GitHub, creates the user session and redirects to /

- `src/app.d.ts`: Declares the Lucia namespace as describe in their [documentation](https://lucia-auth.com/getting-started#set-up-types)

- `.env.example`: Copy to `.env`. Here is stored the private github id and secret used for authentication to github. Refer to [Create a Github OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) for getting the required credentials.

- `schema.sql`: SQL definitions for the creation of tables used in this example

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
pnpm dev
```

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
pnpm preview
```
