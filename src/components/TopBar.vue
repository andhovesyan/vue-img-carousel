<template>
<nav class="navbar navbar-light bg-light navbar-expand">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item" v-for="item in menuItems">
      <router-link class="nav-link" :to="item.to">{{item.title}}</router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [{
        to: '/',
        title: 'Home',
      }, {
        to: '/about',
        title: 'About',
      }, {
        to: '/contact',
        title: 'Contact',
      }],
    };
  },
}
</script>
