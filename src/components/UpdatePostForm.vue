<template>
  <div class="box_post">
    <h1>Modification d'un post</h1>
    <form action="" @submit.prevent>
      <label for="title">Titre</label>
      <input type="text" v-model="title" />

      <label for="text">Post</label>
      <input type="text" v-model="text" />
      <button @click="updatePost">Modifié !</button>
    </form>

    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdatePostForm",
  data() {
    return {
      title: "",
      text: "",
      info: null,
      message: "",
    };
  },
  methods: {
    async updatePost() {
      await axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/addPost/" + 20,
        data: {
          title: this.title,
          text: this.text,
          // id_user a modifié quand la table user sera fonctionnel
          id_user: 2,
        },
      }).then((response) => (this.info = response));
      if (this.info) {
        this.message = "Post modifié !";
        // mettre un redirection vers la page des post
        setTimeout(() => {
          this.$router.go();
        }, 2000);
      }
    },
  },
};
</script>
