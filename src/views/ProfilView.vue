<template>
  <div class="profil">
    <NavBar />
    <div
      class="w-full px-10 bg-white h-screen flex flex-row flex-wrap justify-center">
      <!-- Begin Navbar -->

      <div
        class="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
        <div class="w-full text-right">
          <button class="p-2 fa fa-bars text-4xl text-gray-600"></button>
        </div>
      </div>

      <div
        class="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-green-400 shadow-lg">
        <div class="p-5 sticky top-0">
          <img
            class="border border-indigo-100 shadow-lg rounded-full"
            src="http://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg" />
          <div class="border-white border rounded-xl my-2">
            <div class="py-2 w-full text-center text-base text-white">
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
                  fill="white"
                  d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z" />
                <path
                  fill="white"
                  d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3l3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15l-2 2l-2-2H5V4h14l.002 13H14z" />
              </svg>
              {{ lastname }} {{ firstname }}
            </div>
            <div class="py-2 w-full text-center text-base text-white">
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
                  fill="white"
                  d="M17 10a4 4 0 0 1 4 4v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a4 4 0 0 1 4-4V7h2v3h2V7h2v3h2V7h2v3ZM7 12a2 2 0 0 0-2 2v1h14v-1a2 2 0 0 0-2-2H7Zm-2 5v2h14v-2H5ZM7 4a1 1 0 0 0 1-1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4Zm4 0a1 1 0 0 0 1-1a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4Zm4 0a1 1 0 0 0 1-1a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4Z" />
              </svg>
              {{ age }} ans
            </div>
            <div class="py-2 w-full text-center text-base text-white">
              <svg
                class="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16">
                <rect
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="none" />
                <g fill="white">
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" />
                </g>
              </svg>
              {{ phone }}
            </div>
            <div class="py-2 w-full text-center text-base text-white">
              <svg
                class="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36">
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  fill="none"
                  stroke="none" />
                <path
                  fill="white"
                  d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                  class="clr-i-outline clr-i-outline-path-1" />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              {{ email }}
            </div>
          </div>
        </div>
        <div
          class="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
          <a
            class="hover:bg-white hover:text-green-400 bg-green-400 border-t-2 p-3 w-full text-xl text-left text-white font-semibold"
            href=""
            ><svg
              class="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024">
              <rect
                x="0"
                y="0"
                width="1024"
                height="1024"
                fill="none"
                stroke="none" />
              <path
                fill="white"
                d="M464 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7z" />
            </svg>
            Messages</a
          >
          <a
            class="hover:bg-white hover:text-green-400 bg-green-400 border-t-2 p-3 w-full text-xl text-left text-white font-semibold"
            href="/edit"
            ><svg
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
                fill="white"
                d="M16 22a6 6 0 1 1 6-6a5.936 5.936 0 0 1-6 6Zm0-10a3.912 3.912 0 0 0-4 4a3.912 3.912 0 0 0 4 4a3.912 3.912 0 0 0 4-4a3.912 3.912 0 0 0-4-4Z" />
              <path
                fill="white"
                d="m29.305 11.044l-2.36-4.088a1.998 1.998 0 0 0-2.374-.894l-2.434.823a11.042 11.042 0 0 0-1.312-.758l-.503-2.519A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.962 1.608l-.503 2.519a10.967 10.967 0 0 0-1.327.753l-2.42-.818a1.998 1.998 0 0 0-2.372.894l-2.36 4.088a2 2 0 0 0 .411 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16c0 .258.01.513.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a1.998 1.998 0 0 0 2.374.895l2.434-.824a10.974 10.974 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30H18v-2h-4.36l-.71-3.55a9.095 9.095 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.926 8.926 0 0 1-.007-3.128l-2.718-2.389l2.36-4.088l3.427 1.16A9.03 9.03 0 0 1 12.93 7.55L13.64 4h4.72l.71 3.55a9.098 9.098 0 0 1 2.695 1.572l3.447-1.166l2.36 4.088l-2.798 2.452L26.092 16l2.8-2.454a2 2 0 0 0 .413-2.502Z" />
              <path
                fill="white"
                d="m23 26.18l-2.59-2.59L19 25l4 4l7-7l-1.41-1.41L23 26.18z" />
            </svg>
            Réglages</a
          >
          <a
            @click="logout"
            class="hover:bg-white hover:text-green-400 bg-green-400 border-t-2 p-3 w-full text-xl text-left text-white font-semibold"
            href=""
            ><svg
              class="inline-block pr-1"
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
                fill="white"
                d="m12.59 13l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H3a1 1 0 0 0 0 2ZM12 2a10 10 0 0 0-9 5.55a1 1 0 0 0 1.8.9A8 8 0 1 1 12 20a7.93 7.93 0 0 1-7.16-4.45a1 1 0 0 0-1.8.9A10 10 0 1 0 12 2Z" /></svg
            >Déconnexion</a
          >
        </div>
      </div>

      <!-- End Navbar -->
      <div
        class="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
        <div class="bg-green-400 w-full shadow rounded-lg p-5">
          <form method="POST" enctype="multipart/form-data" @submit.prevent>
            <input
              class="w-full rounded-lg py-3 px-4 bg-gray-200 mb-2 mr-2"
              placeholder="Titre du post"
              accept="image/png, image/jpeg"
              type="text"
              name="title"
              id="title"
              v-model="title" />
            <input
              class="w-full rounded-lg py-2 px-3 bg-gray-200 mb-2"
              type="file"
              name="image"
              id="image"
              ref="file"
              multiple
              @change="addImage" />

            <textarea
              class="bg-gray-200 w-full rounded-lg shadow border p-2"
              rows="5"
              placeholder="Ecrivez votre post"
              v-model="text"></textarea>

            <div class="w-full flex flex-row flex-wrap mt-3">
              <div class="w-1/3">
                <select
                  class="w-full p-2 rounded-lg bg-gray-200 shadow border float-left">
                  <option>Public</option>
                  <option>Privée</option>
                </select>
              </div>
              <div class="w-2/3">
                <button
                  type="button"
                  class="float-right bg-white hover:bg-gray-200 text-green-400 font-bold p-2 rounded-lg"
                  @click="addPost">
                  Soumettre
                </button>
              </div>
            </div>
          </form>
          <h2>{{ message }}</h2>
        </div>
        <ul>
          <div class="mt-3 flex flex-col">
            <li v-for="info2 in list" :key="info2.id">
              <div class="bg-white mt-3 border-2 border-green-400 rounded-lg">
                <div class="titre">{{ info2.title }}</div>
                <div class="border rounded-t-lg shadow-lg">
                  <img src="file.name" alt="" />
                </div>
                <div
                  class="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                  {{ info2.text }}
                </div>
                <div class="bg-white p-1 border shadow flex flex-row flex-wrap">
                  <div
                    class="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">
                    Like
                  </div>
                  <div
                    class="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">
                    Share
                  </div>
                  <div
                    class="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">
                    Comment
                  </div>
                </div>

                <div
                  class="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
                  <div class="w-full">
                    <div class="w-full text-left text-xl text-gray-600">
                      @{{ lastname }}{{ firstname }}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>
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
  name: "ProfilView",
  components: { NavBar, Footer },

  data() {
    return {
      list: "",
      token: token,
      lastname: "",
      firstname: "",
      email: "",
      age: "",
      phone: "",
      show: false,
      isOpen1: true,
      isOpen2: false,
      id_user: "",
      title: "",
      text: "",
      info: "",
      info2: null,
      image: "",
      message: "",
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
    this.age = this.info["age"];
    this.phone = this.info["phone"];
    this.email = this.info["email"];
  },

  async mounted() {
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/addPost",
      headers: { Authorization: "Bearer " + token },
    }).then((response) => (this.info2 = response.data.addPost));
    console.log(this.info2);

    this.title = this.info2["title"];
    this.text = this.info["firstname"];
    this.like = this.info["like"];
    this.id_user = this.info["id_user"];
    this.image = this.info["image"];
  },

  methods: {
    async addPost() {
      await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/addPost",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
        data: {
          title: this.title,
          text: this.text,
          like: 0,

          id_user: this.id_user,
          image: this.image,
        },
      }).then((response) => (this.info2 = response));
      console.log(this.info2);

      if (this.info2) {
        this.message = "Post publié !";
        setTimeout(() => {
          this.$router.push("/profil");
        }, 2000);
        window.location.reload();
      }
      this.list = data.addPost;
      console.log(data);
    },

    logout() {
      localStorage.clear();
      const newLoc = "http://localhost:8080/";
      window.location.href = newLoc;
      // localStorage.removeItem(data.access_token);
      // this.$router.push({ name: "welcome" });
    },
    addImage(event) {
      this.image = this.$refs.file.files[0];
    },
  },
};
</script>

<style></style>
