<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes.vue'

export default {
  components: { NavBarRoutes },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
        {
          name: 'table',
          title: 'Table',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'profile',
          title: () => 'Logged in as ' + this.currentUser.name,
        },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-toggle target="nav-collapse" left></b-navbar-toggle>
      <b-navbar-brand href="#" left>NavBar</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav left>
          <NavBarRoutes :routes="persistentNavRoutes" />
          <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
          <NavBarRoutes v-else :routes="loggedOutNavRoutes" />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>
