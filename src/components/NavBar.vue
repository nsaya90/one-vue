<template>
  <!-- component -->
  <nav
    class="flex items-center justify-between flex-wrap bg-green-400 py-2 lg:px-3 shadow border-solid">
    <div
      class="flex justify-between lg:w-auto w-full lg:border-b-0 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
      <div class="flex items-center pr-6 flex-shrink-0 text-gray-800">
        <a href="/">
          <img class="mx-auto h-12 w-auto" src="@/assets/logolight.png"
        /></a>
      </div>
    </div>

    <div
      class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
      <div v-if="token" class="text-md font-bold text-white lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 text-white lg:inline-block lg:mt-0 hover:text-green-400 px-4 py-2 rounded hover:bg-white mr-2">
          Acceuil
        </a>
        <a
          href="/profil"
          class="block mt-4 text-white lg:inline-block lg:mt-0 hover:text-green-400 px-4 py-2 rounded hover:bg-white mr-2">
          Profil
        </a>
      </div>
      <!-- This is an example component -->
      <div
        v-if="token"
        class="relative mx-auto text-white lg:block hidden pr-2">
        <!-- <input
          class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search" />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
          <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button> -->

        <p class="text-lg uppercase">{{ lastname }} {{ firstname }}</p>
        <p class="text-xs">{{ email }}</p>
      </div>
      <div v-if="!token" class="flex">
        <a
          href="/register"
          class="block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-green-400 mt-4 hover:bg-white lg:mt-0"
          >Inscription</a
        >

        <a
          href="/login"
          class="block text-md px-4 ml-2 py-2 rounded text-white font-bold hover:text-green-400 mt-4 hover:bg-white lg:mt-0"
          >Connexion</a
        >
      </div>

      <div v-if="token" class="flex">
        <div class="relative">
          <button
            class="rounded-full overflow-hidden border-2 border-teal-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
            @click="isOpen2 = true">
            <img src="https://i.pravatar.cc/150?u=1" alt="" />
          </button>

          <div
            v-if="isOpen2"
            class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
            @click="isOpen2 = false"></div>
          <div class="absolute z-30 right-0 mt-2" :class="{ hidden: !isOpen2 }">
            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
              <a
                href="/profil"
                class="block text-green-400 font-semibold px-4 py-2 | hover:text-white hover:bg-green-400">
                <svg
                  class="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="none" />
                  <path
                    fill="#4ade80"
                    d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3l3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z" />
                </svg>
                Profil</a
              >
              <a
                href="edit"
                class="block text-green-400 font-semibold px-4 py-2 | hover:text-white hover:bg-green-400">
                <svg
                  class="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32">
                  <rect
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="none" />
                  <path
                    fill="#4ade80"
                    d="M16 22a6 6 0 1 1 6-6a5.936 5.936 0 0 1-6 6Zm0-10a3.912 3.912 0 0 0-4 4a3.912 3.912 0 0 0 4 4a3.912 3.912 0 0 0 4-4a3.912 3.912 0 0 0-4-4Z" />
                  <path
                    fill="#4ade80"
                    d="m29.305 11.044l-2.36-4.088a1.998 1.998 0 0 0-2.374-.894l-2.434.823a11.042 11.042 0 0 0-1.312-.758l-.503-2.519A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.962 1.608l-.503 2.519a10.967 10.967 0 0 0-1.327.753l-2.42-.818a1.998 1.998 0 0 0-2.372.894l-2.36 4.088a2 2 0 0 0 .411 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16c0 .258.01.513.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a1.998 1.998 0 0 0 2.374.895l2.434-.824a10.974 10.974 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30H18v-2h-4.36l-.71-3.55a9.095 9.095 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.926 8.926 0 0 1-.007-3.128l-2.718-2.389l2.36-4.088l3.427 1.16A9.03 9.03 0 0 1 12.93 7.55L13.64 4h4.72l.71 3.55a9.098 9.098 0 0 1 2.695 1.572l3.447-1.166l2.36 4.088l-2.798 2.452L26.092 16l2.8-2.454a2 2 0 0 0 .413-2.502Z" />
                  <path
                    fill="#4ade80"
                    d="m23 26.18l-2.59-2.59L19 25l4 4l7-7l-1.41-1.41L23 26.18z" />
                </svg>
                Réglages</a
              >
              <a
                @click="logout"
                class="block cursor-pointer text-green-400 font-semibold px-4 py-2 | hover:text-white hover:bg-green-400">
                <svg
                  class="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="none" />
                  <path
                    fill="#4ade80"
                    d="m12.59 13l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H3a1 1 0 0 0 0 2ZM12 2a10 10 0 0 0-9 5.55a1 1 0 0 0 1.8.9A8 8 0 1 1 12 20a7.93 7.93 0 0 1-7.16-4.45a1 1 0 0 0-1.8.9A10 10 0 1 0 12 2Z" />
                </svg>
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
const token = localStorage.getItem("token");

export default {
  name: "NavBar",

  data() {
    return {
      token: token,
      lastname: "",
      firstname: "",
      email: "",
      age: "",
      phone: "",
      show: false,
      isOpen1: true,
      isOpen2: false,
      info: "",
    };
  },

  async mounted() {
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/user",
      headers: { Authorization: "Bearer " + token },
    }).then((response) => (this.info = response.data.user));
    this.lastname = this.info["lastname"];
    this.firstname = this.info["firstname"];
    this.email = this.info["email"];
  },

  methods: {
    logout() {
      localStorage.clear();
      const newLoc = "http://localhost:8080/";
      window.location.href = newLoc;
    },
  },

  // methods: {
  //   async logout() {
  //     await axios({
  //       method: "get",
  //       url: "http://127.0.0.1:8000/api/logout",
  //       headers: { Authorization: "Bearer " + token },
  //     }).then((response) => (this.info = response.data.user));
  //     localStorage.removeItem(data.access_token);
  //     this.$router.push({ path: "/" });
  //     // location = "http://localhost:8080/";
  //     // document.location.href = "/";
  //     console.log(this.info);
  //   },
  // },
};
</script>

<style></style>
