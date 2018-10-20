<template>
<div>
  <header id="header">
    <div class="container">
      <top-bar></top-bar>
    </div>
  </header>
  <section class="mt-5" id="content">
    <div class="container">
      <slot></slot>
    </div>
  </section>
  <section style="height: 1000px"></section>
</div>
</template>

<script>
import TopBar from '../components/TopBar.vue';

export default {
  components: {
    TopBar,
  },
};
</script>

<style>
  #header {
    position: sticky;
    top: 0;
    z-index: 100000;
  }
</style>
