# Lucia Authentication with Username/Password

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
│   │   ├── (auth)/
│   │   │   ├── signin/
│   │   │   │   └── index.ts
│   │   │   ├── signup/
│   │   │   │   └── index.ts
│   │   │   └── layout.tsx
│   │   ├── index.tsx
│   │   └── ...
│   └── app.d.ts
├── schema.sql
└── ...
```

- `src/auth/lucia.ts`: Sets up the the lucia authentication library and exports `auth` which is used for authentication

- `src/routes/(auth)` - [Grouped Layout](https://qwik.builder.io/docs/advanced/routing/#grouped-layouts) for all authentication pages

- `src/routes/(auth)/signin/index.tsx`: Basic signin page, prompting to sign in or sign up

- `src/routes/(auth)/signup/index.ts`: Signup page, which handles username/password validation and creating new users

- `src/routes/(auth)/layout.tsx`: Redirects to / if the user is already signed in while visiting sign in/up pages

- `src/routes/index.tsx`: Shows user profile when signed in

- `src/app.d.ts`: Declares the Lucia namespace as describe in their [documentation](https://lucia-auth.com/getting-started#set-up-types)

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
