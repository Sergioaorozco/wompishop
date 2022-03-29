<template>
  <wompi-app></wompi-app>
</template>

<script>
import WompiApp from './components/WompiApp.vue'

export default {
  name: 'App',
  components: {
    'wompi-app': WompiApp,
  }
}
</script>

<style lang="scss">
@import "./assets/styles.css";

body {
  margin: 0;
  background-color: var(--color-body-background);
  color: var(--color-body-text);
}
</style>
