# fe-esthetic-project

Landing page for the Fe Esthetic studio, built with Angular 17. It supports server-side rendering (SSR) and prerendering, and uses parallax and scroll animations.

The Angular app lives in [`fe-esthetic/`](fe-esthetic/). The root `package.json` only forwards commands to it.

## Requirements

- Node.js 18.13+ or 20 (Node 22 also works in this environment)
- npm

## Quick start

From the repo root:

```bash
npm install     # runs the app's install via postinstall
npm start       # serves the app at http://localhost:4200
```

Or work inside the app folder directly:

```bash
cd fe-esthetic
npm install
npm start
```

`npm start` opens the dev server at http://localhost:4200.

## Production build and SSR

```bash
npm run build          # production build, including the server bundle and prerendering
npm run serve:ssr      # serves the SSR build at http://localhost:4000
```

## Tests

```bash
npm test
```

This runs the Angular test runner (`ng test`) from `fe-esthetic/`.

## Project structure

```
fe-esthetic-project/
├── package.json          # root scripts that forward to fe-esthetic/
├── fe-esthetic/
│   ├── angular.json      # build, prerender and test configuration
│   ├── server.ts         # Express server for SSR
│   └── src/
│       ├── app/          # root component, routes and app config
│       ├── styles.css    # global styles and design tokens
│       └── ...
└── README.md
```

- `src/app/` holds the root component, routes and app configuration. Shared `components/` and `directives/` folders (for the parallax and reveal directives) are not in the tree yet.
- `src/styles.css` holds the global styles and design tokens.

## Accessibility

Animations are meant to respect `prefers-reduced-motion`, so users who ask for less motion get a static page. This is not implemented yet. No `prefers-reduced-motion` rules exist in `fe-esthetic/src` at the moment.
