<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/register">S'inscrire</router-link>
  </nav> -->
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-active,
.route-leave-active {
  transition: opacity 1s ease-out;
}
</style>
