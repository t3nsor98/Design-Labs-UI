# Design Labs UI

A modern, lightweight React component library and example frontend showcasing reusable UI components built for design experimentation and quick prototyping.

This repository contains two main packages:

- `design-labs-ui` — a component library (source in `design-labs-ui/`) intended to be published and consumed as a dependency.
- `fronted` — a demo / playground application (source in `fronted/`) that builds and demonstrates components from the library.

## What this project does

The goal is to provide a small collection of thoughtfully styled React components (cards, clocks, terminals, navs, etc.) that are easy to reuse in other projects. The library is built with TypeScript and bundled using Rollup. The `fronted` app uses Vite to serve and preview the components and integrates Tailwind for utility-first styling and Framer Motion for micro-interactions.

## How to read this file

Below is a dependency-by-dependency explanation pulled directly from the two `package.json` files in the workspace: `design-labs-ui/package.json` and `fronted/package.json`.

For each dependency you'll find:

- What the package does (technical role)
- Why it is used in this project (practical reason)

---

## design-labs-ui (component library) — dependencies

These entries come from `design-labs-ui/package.json`. The library declares React and React DOM as peer dependencies (consumers provide them) and includes build/test tooling as devDependencies.

### Peer dependencies

- `react` (>=17.0.0)
  - What it does: UI library for building components.
  - Why used: All components are React components; marking as a peer dependency avoids bundling React into the library so consumers use the same React instance and avoid duplicate React copies.

- `react-dom` (>=17.0.0)
  - What it does: React DOM renderer for web browsers.
  - Why used: Required by consumers to render the library components to the DOM. Kept as a peer dependency for the same reason as `react`.

### Dev dependencies (build, test, lint, types)

- `@babel/cli`, `@babel/preset-env`, `@babel/preset-react`
  - What they do: Babel toolchain for transpiling modern JavaScript and JSX to a format that works in older environments.
  - Why used: Some build steps (tests or examples) or tooling can require Babel transforms; they help ensure the output is compatible across targets when Rollup or tests rely on Babel.

- `@rollup/plugin-commonjs` and `@rollup/plugin-node-resolve`
  - What they do: Rollup plugins for resolving Node modules and converting CommonJS modules to ES modules during bundling.
  - Why used: The library uses Rollup to bundle files for distribution. These plugins let Rollup find and include third-party modules and handle packages that ship CommonJS builds.

- `@rollup/plugin-terser` and `rollup-plugin-terser`
  - What they do: Minifiers for produced bundles (Terser) used as plugins in Rollup.
  - Why used: Minify built artifacts for smaller bundle sizes. (Note: both `@rollup/plugin-terser` and `rollup-plugin-terser` appear in `devDependencies` — this is likely redundant and can be cleaned up; prefer `@rollup/plugin-terser` for modern Rollup plugin usage.)

- `@rollup/plugin-typescript`
  - What it does: Integrates TypeScript compilation with Rollup.
  - Why used: The library is written in TypeScript; this plugin ensures types are compiled/handled during bundling and helps produce `.d.ts` type outputs.

- `@types/react`
  - What it does: TypeScript type definitions for React.
  - Why used: Provides accurate typing for building the library's TypeScript components.

- `eslint`
  - What it does: Static analysis and linting for JavaScript/TypeScript code.
  - Why used: Enforces code quality and consistent style across the library source.

- `jest`
  - What it does: JavaScript testing framework.
  - Why used: Run unit tests for components and library logic.

- `postcss`
  - What it does: CSS processing tool used to transform CSS with plugins.
  - Why used: PostCSS can process component CSS (autoprefixing, CSS variables, etc.) when bundling styles.

- `react` and `react-dom` (dev versions present)
  - What they do: Local dev copies of React and React DOM used during building and testing.
  - Why used: Convenient for running tests and building examples inside the package. Note they are also listed as peer dependencies in the final published package (so consumers supply them).

- `rollup`, `rollup-plugin-peer-deps-external`, `rollup-plugin-postcss`
  - What they do: `rollup` is the bundler; `rollup-plugin-peer-deps-external` marks peer deps as external so they aren’t bundled; `rollup-plugin-postcss` extracts/handles CSS during bundling.
  - Why used: Core build flow — create distributable JS/CSS output, keep peer dependencies external, and process component styles into the final package.

- `tslib`
  - What it does: Runtime helpers for TypeScript (small helper functions reused instead of inlining helpers everywhere).
  - Why used: Keeps compiled output smaller and avoids duplicating TypeScript helper code across files.

- `typescript`
  - What it does: TypeScript compiler and language tooling.
  - Why used: The source is written in TypeScript so the project needs `typescript` to check types and produce declaration files.

---

## fronted (demo app) — dependencies

These entries come from `fronted/package.json`. The `fronted` app is a Vite app used to preview and develop the components.

### Dependencies (runtime)

- `@tailwindcss/vite`
  - What it does: Helper/integration to use Tailwind with Vite (plugin to streamline Tailwind workflow).
  - Why used: Eases integrating Tailwind into the Vite dev server, enabling JIT builds and fast feedback while developing component styles.

- `design-labs-ui` (version ^1.5.0)
  - What it does: Local component library package (the main code in this repo).
  - Why used: The demo app consumes the library to demonstrate components and ensure they work in a real app environment.

- `framer-motion`
  - What it does: Animation library for React (declarative motion primitives).
  - Why used: Adds polished animations and micro-interactions to demo components and the site UI.

- `react`, `react-dom`
  - What they do: Core framework and DOM renderer for the app.
  - Why used: `fronted` is a React application.

- `react-icons`
  - What it does: Curated icon components (wrappers around popular icon sets) for React.
  - Why used: Quick, consistent iconography without adding heavy icon font assets.

- `react-router-dom`
  - What it does: Routing library for React web apps.
  - Why used: Provide multiple pages/interfaces (Documentation, Showcase, Home) inside the demo app.

- `tailwindcss`
  - What it does: Utility-first CSS framework.
  - Why used: Speeds up styling of the demo site and can be used to compose utility classes that augment the component styles.

### Dev dependencies (build and tooling)

- `@eslint/js`, `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
  - What they do: Linting core and React-specific lint rules (including hook rules and fast-refresh related checks).
  - Why used: Improve code quality, catch common React mistakes (like hook misuse), and keep the demo codebase consistent.

- `@types/react`, `@types/react-dom`
  - What they do: TypeScript type definitions for React and React DOM.
  - Why used: If any TypeScript or typed tooling is used in the demo, these provide typings for editor/compile-time checks.

- `@vitejs/plugin-react`
  - What it does: Vite plugin that enables React Fast Refresh and JSX transformations.
  - Why used: Improves dev experience with instant feedback and correct JSX handling.

- `globals`
  - What it does: Provides global variable type definitions for tests or linters.
  - Why used: Avoids linter/test warnings about known globals.

- `vite`
  - What it does: Fast dev server and build tool based on ES modules.
  - Why used: Primary bundler/dev server used by `fronted` for instant reloading and fast builds.

---

## Notes and recommendations

- Duplicate or redundant packages: `design-labs-ui` lists both `@rollup/plugin-terser` and `rollup-plugin-terser` — you can remove the older `rollup-plugin-terser` and keep the scoped `@rollup` plugin to stay consistent with modern Rollup usage.

- Peer dependencies: keeping `react` and `react-dom` as peer dependencies in the library is important. It prevents bundling multiple React copies into consuming applications, which could otherwise cause errors (React state/hooks rely on a single React instance).

- Types: If you plan to publish `design-labs-ui` to npm, ensure the `types` entry (currently `dist/types/index.d.ts`) is published alongside the compiled JS so TypeScript consumers get correct typings.

## Quick developer notes

- To build the library: run the `build` script defined in `design-labs-ui/package.json` (it uses Rollup).
- To run the demo app: in the `fronted` folder run the `dev` script (Vite) to preview components locally.

## Conclusion

This project is structured as a component library plus a demo application. The dependencies are chosen to provide a small, fast build pipeline (`Rollup` and `Vite`), TypeScript support, good developer experience (ESLint, plugin integrations), and a fast, utility-driven styling workflow (`Tailwind`) with animation (`Framer Motion`) in the demo site. The arrangement keeps runtime dependencies minimal in the library (React and React DOM as peers) and uses devDependencies for build/test/lint tools so consumers get a small runtime footprint.
