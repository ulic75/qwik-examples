# Auth.js Authenticated App

- [Qwik Docs](https://qwik.builder.io/)
- [Auth.js](https://authjs.dev)

---

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── src/
│   └── routes/
│      ├── protected/
│      ├── plugin@auth.ts
│      └── ...
├── .env
└── ...
```

- `src/routes/protected`: This page is protected thanks to the onRequest middleware on the page. This middleware could also be included in a layout to protect a higher level of multiple pages. If access is attempted without being authenticated it will redirect to the login page

- `src/routes/plugin@auth.ts`: This file is used to make available the the server side actions and loaders that can be used for managing the sign in/out process as well as the session. You can find out more about configuration at the [Auth.js](https://authjs.dev) project site.

- `.env`: Here are stored all of the private tokens, ids and secrets used for authentication against the various services.

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
