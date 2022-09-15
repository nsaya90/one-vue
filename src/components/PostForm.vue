<template>
    <div class="box_post">
        <h1>Ajout d'un nouveau post</h1>
        <form action="" @submit.prevent>
            <label for="title">Titre</label>
            <input type="text" v-model="title" />

            <label for="text">Post</label>
            <input type="text" v-model="text" />
            <button @click="addPost">Posté !</button>
        </form>

        <h2>{{ message }}</h2>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "PostForm",
    data() {
        return {
            title: "",
            text: "",
            info: null,
            message: "",
        };
    },
    methods: {
        async addPost() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/addPost",

                data: {
                    title: this.title,
                    text: this.text,
                    like: 0,
                    // id_user a modifié quand la table user sera fonctionnel
                    id_user: 2,
                },
            }).then((response) => (this.info = response));

            if (this.info) {
                this.message = "Post publié !";

                setTimeout(() => {
                    this.$router.go();
                }, 2000);
            }
        },
    },
};
</script>
