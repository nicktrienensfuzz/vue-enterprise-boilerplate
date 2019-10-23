---
inject: true
to: src/router/routes.js
after: export default [
skip_if: react-native-fs
---
 {
    path: '/name',
    name: 'name',
    component: () => lazyLoadView(import('@views/name.vue')),
 }