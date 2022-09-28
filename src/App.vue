<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/register">S'inscrire</router-link>
  </nav> -->
  <router-view />
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
</style>
