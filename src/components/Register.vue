<template>
  <div class="register">
    <body class="bg-white">
      <!-- url('/img/hero-pattern.svg') -->
      <div class="flex min-h-screen bg-white">
        <div
          class="w-1/2 bg-cover bg-center md:block hidden"
          style="
            background-image: url(https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
          "></div>
        <!-- <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
            <img src="log_in.webp" alt="hey">
        </div> -->

        <div class="md:w-1/2 max-w-lg mx-auto px-4 py-5 shadow-none">
          <div class="text-left p-0 font-sans">
            <a href="/">
              <img class="mx-auto h-24 w-auto" src="@/assets/petitlogo.png"
            /></a>
            <h1 class="text-green-400 text-3xl font-medium">
              Créer votre compte gratuit
            </h1>
            <h3 class="p-1 text-green-400">Pas de paiement nécéssaire.</h3>
          </div>
          <form action="" class="p-0" @submit.prevent>
            <div class="flex -mx-3 mt-5">
              <div class="w-1/2 px-3">
                <div class="flex">
                  <input
                    type="text"
                    class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
                    id="lastname"
                    v-model="lastname"
                    placeholder="Nom"
                    required />
                </div>
              </div>

              <div class="w-1/2 px-3">
                <div class="flex">
                  <input
                    type="text"
                    class="firstnameRegister block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
                    id="firstname"
                    v-model="firstname"
                    placeholder="Prénom"
                    required />
                </div>
              </div>
            </div>

            <div class="mt-5">
              <!-- <label for="email" class="sc-bqyKva ePvcBv">Email</label> -->
              <input
                id="age"
                v-model="age"
                type="number"
                class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
                placeholder="Age" />
            </div>

            <div class="mt-5">
              <input
                id="number"
                v-model="phone"
                type="number"
                class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
                placeholder="Téléphone" />
            </div>

            <div class="mt-5">
              <!-- <label for="email" class="sc-bqyKva ePvcBv">Email</label> -->
              <input
                id="email"
                v-model="email"
                type="email"
                class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
                placeholder="Email" />
            </div>

            <div class="mt-5">
              <input
                id="password"
                v-model="password"
                type="password"
                class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-transparent"
                placeholder="Mot de passe" />
            </div>

            <div
              class="mt-4 block p-5 text-sm md:font-sans text-xs text-gray-800">
              <input type="checkbox" class="inline-block border-0" />
              <span display="inline" class="pl-2"
                >En créant ce compte vous etes d'accord avec nos
                <a class="" href="/s/terms" target="_blank" data-test="Link">
                  <span class="underline">Termes and Conditions</span>
                </a>
                et notre
                <a class="" href="/s/privacy" target="_blank" data-test="Link">
                  <span class="underline">Polique de confidentialité</span>
                </a>
              </span>
            </div>

            <div class="mt-5">
              <button
                @click="register"
                value="Valider votre inscription"
                class="py-3 bg-green-400 text-white w-full rounded hover:bg-green-600">
                Valider votre inscription
              </button>
              <div class="mt-2 text-center"></div>
              <h2 class="bg-green-400">{{ message }}</h2>
            </div>
          </form>
          <a class="" href="/login" data-test="Link"
            ><span class="block p-3 text-center text-gray-800 text-xs"
              >Vous avez deja un compte ?</span
            ></a
          >
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",

  data() {
    return {
      lastname: "",
      firstname: "",
      age: "",
      email: "",
      phone: "",
      password: "",
      info: "",
      message: "",
      token: "",
    };
  },
  methods: {
    async register() {
      await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/register",
        data: {
          lastname: this.lastname,
          firstname: this.firstname,
          age: this.age,
          email: this.email,
          phone: this.phone,
          password: this.password,
        },
      }).then((response) => (this.info = response));
      if (this.info) {
        this.message = "Votre profil a été crée !";
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      }
    },
  },
};
</script>

<style></style>
