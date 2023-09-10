# Qwik Messaging App with Socket.IO and node-server

- [Qwik Docs](https://qwik.builder.io/)
- [Socket.IO](https://socket.io/)
- [Express](https://expressjs.com/)

---

## Project Structure

This project is using Qwik with a Socket.IO client/server which functions in both both production (node http server) and dev (vite).

Inside the project, you should take note of the the following directories and files:

```
├── src/
│   ├── routes/
│   │   └── index.tsx
│   ├── socket.io/
│   │   ├── handler.ts
│   │   ├── server-events.ts
│   │   ├── socket-events.ts
│   │   └── types.ts
│   └── entry.express.ts
├── vite/
│   └── plugin-socket-io.ts
├── vite.config.ts
```

- `src/routes/index.tsx`: This is where the front end is implimented
- `src/socket.io/handler.ts`: The foundation of the Socket.IO server
- `src/socket.io/server-events.ts`: Events initiated by the server
- `src/socket.io/socket-events.ts`: Events initiated by the client browser
- `src/socket.io/types.ts`: Establish the typing for the Socket.IO messages
- `src/entry.express.ts`: The important part in this file is the addition of `injectSocketIO(httpServer)`, creating the httpServer and listening to it
- `vite/plugin-socket-io.ts`: This is the vite plugin which adds the Socket.IO server into the vite dev server
- `vite.config.ts`: The notable thing in this file is the addition of the `vitePluginSocketIO()` plugin

The structure isn't entirely important, it just made sense to me. The `socket.io` folder could be simplified into a single file if so desired.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

Unfortunetly the I haven't found a way to get the vite preview server to handle creating the socket.io service yet. So `pnpm preview` won't work as desired.

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
pnpm build
```

## Express Server

This app has a minimal [Express server](https://expressjs.com/) implementation. After running a full build, you can preview the build using the command:

```
pnpm serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)
