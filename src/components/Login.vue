<template>
  <div class="Login">
    <body class="bg-green-700">
      <div class="flex min-h-screen bg-green-400">
        <div class="md:w-1/2 max-w-lg mx-auto mt-4 px-4 py-5 shadow-none">
          <div class="text-left p-0 font-sans">
            <a href="/">
              <img
                class="mx-auto h-30 w-auto"
                src="@/assets/petitlogoblanc.png"
            /></a>
            <p class="text-white text-3xl font-medium">
              Connectez-vous à votre compte
            </p>

            <!-- Field -->
            <form @submit.prevent>
              <div class="mt-6">
                <input
                  v-model="email"
                  type="text"
                  placeholder="Email"
                  class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-transparent" />
              </div>
              <!-- Field -->
              <div class="mt-6">
                <input
                  v-model="password"
                  type="password"
                  placeholder="Mot de passe"
                  class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-transparent" />
              </div>

              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <div>
                    <input type="checkbox" class="form-checkbox" />
                    <span class="ml-2 text-white">Se souvenir</span>
                  </div>
                  <a class="text-xs font-semibold text-white"
                    >Mot de passe oublié ?</a
                  >
                </div>
              </div>

              <div class="mt-6">
                <button
                  @click="login"
                  class="w-full bg-white text-green-400 font-bold py-2 rounded hover:bg-gray-200">
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="w-1/2">
          <img
            class="object-cover object-center w-full h-screen"
            src="https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      message: "",
      token: "",
    };
  },

  methods: {
    async login() {
      await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/login",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then((response) => (this.token = response.data.access_token));
      localStorage.setItem("token", this.token);
      if (this.token) {
        this.message = "Connexion reussi";
        setTimeout(() => {
          window.location.href = "http://localhost:8080/profil";
        }, 1000);
        // setTimeout(() => {
        //   this.$router.push("/profil");
        // }, 1000);
      }
      console.log(this.info);
    },
  },
};
</script>

<style></style>
