# Vue :heart: Rollup

> A Vue 2.0 + Rollup template to get your app started in less than a minute

Out of the box this template will generate a Vue 2.0 project with [Vuex](https://vuex.vuejs.org/), [Vue-Router](https://router.vuejs.org/) and [Vuex-Router-Sync](https://github.com/vuejs/vuex-router-sync).  
It has support for CSS preprocessors and includes some basic components for a responsive web app.

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
npm install -g vue-cli
vue init blockscoped/vue-rollup-less my-project
cd my-project
npm install
npm run dev
```

### Build commands

- `npm run dev`
  - watch for source changes
  - [livereload](https://github.com/thgh/rollup-plugin-livereload) on bundle change
  - [serve](https://github.com/thgh/rollup-plugin-serve) on local dev server

- `npm run watch`
  - watch for source changes

- `npm run build`
  - Production build with HTML/CSS/JS minification.
  - extract [css](https://github.com/thgh/rollup-plugin-css-only)

