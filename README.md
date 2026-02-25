# Skeleton Framework for React-based Federated Module

## About

This project is built with React + TypeScript + Vite and provides a minimal setup to get React working in Vite with HMR and ESLint rules.

It is intended to be loaded within the [shell-platform](https://github.com/OffBy1-tech/shell-platform) project.

You can choose to build out your front end however you'd like. This is just a starting example!

## Fast Refresh

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
