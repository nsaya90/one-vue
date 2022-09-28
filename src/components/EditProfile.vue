<template>
  <div class="edit">
    <NavBar />
    <div
      class="flex min-h-min bg-green-400 border-t border-b border-white border-2">
      <div class="md:w-1/2 max-w-lg mx-auto px-4 py-24 shadow-none">
        <div class="text-center p-0 font-sans">
          <h1 class="text-white text-3xl font-medium">
            Mise à jour de vos informations
          </h1>
        </div>
        <form action="" class="p-10 shadow-lg rounded-lg" @submit.prevent>
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

          <div class="mt-5">
            <button
              @click="update"
              class="py-3 bg-green-400 text-white w-full rounded hover:bg-white hover:text-green-400">
              Valider vos modifications
            </button>
            <div class="mt-2 text-center"></div>
            <h2 class="bg-green-400">{{ message }}</h2>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
const token = localStorage.getItem("token");

export default {
  name: "EditView",
  components: { NavBar, Footer },

  data() {
    return {
      id_user: "",
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
  async mounted() {
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/user",
      headers: { Authorization: "Bearer " + token },
    }).then((response) => (this.info = response.data.user));
    this.id_user = this.info["id_user"];
    this.lastname = this.info["lastname"];
    this.firstname = this.info["firstname"];
    this.age = this.info["age"];
    this.phone = this.info["phone"];
    this.email = this.info["email"];
    this.password = this.info["password"];
  },

  methods: {
    async update() {
      await axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/user",
        headers: { Authorization: "Bearer " + token },
        data: {
          lastname: this.lastname,
          firstname: this.firstname,
          age: this.age,
          email: this.email,
          phone: this.phone,
          password: this.password,
        },
      }).then((response) => (this.info = response.data.user));

      if (this.info) {
        this.message = "Modifications éffectuées";
        setTimeout(() => {
          this.$router.push("/profil");
        }, 2000);
      }
    },
  },
};
</script>

<style></style>
