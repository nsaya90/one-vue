<template>
    <!-- <div class="box_post">
        <h1>Ajout d'un nouveau post</h1>
        <form action="" @submit.prevent>
            <label for="title">Titre</label>
            <input type="text" v-model="title" />

            <label for="text">Text</label>
            <input type="text" v-model="text" />

            <label for="image">Image</label>
            <input
                type="file"
                @change="addImage"
                multiple
                name="image"
                ref="file"
            />
            <button @click="addPost">Posté !</button>
        </form>

        <h2>{{ message }}</h2>
    </div> -->

    <!-- Tailwind -->

    <div class="flex justify-center items-center h-screen w-full bg-blue-400">
        <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
            <h1
                class="block w-full text-center text-gray-800 text-2xl font-bold mb-6"
            >
                Ajout d'un post
            </h1>

            <form action="/" method="post" @submit.prevent>
                <div class="flex flex-col mb-4">
                    <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="title"
                        >Titre du post</label
                    >
                    <input
                        class="border py-2 px-3 text-grey-800"
                        type="text"
                        name="title"
                        id="title"
                        v-model="title"
                    />
                </div>
                <div class="flex flex-col mb-4">
                    <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="text"
                        >Texte</label
                    >
                    <textarea
                        class="border py-2 px-3 text-grey-800 rounded-lg border block p-4"
                        type="text"
                        name="text"
                        id="text"
                        v-model="text"
                    />
                </div>
                <div class="flex flex-col mb-4">
                    <label
                        class="mb-2 font-bold text-lg text-gray-900"
                        for="image"
                        >Image</label
                    >
                    <input
                        class="border py-2 px-3 text-grey-800"
                        type="file"
                        name="image"
                        id="image"
                        ref="file"
                        multiple
                        @change="addImage"
                    />
                </div>

                <button
                    class="block bg-teal-400 hover:bg-teal-600 text-black uppercase text-lg mx-auto p-4 rounded bg-green-400"
                    @click="addPost"
                >
                    Publication !
                </button>
            </form>
            <h2>{{ message }}</h2>
        </div>
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
            image: "",
            message: "",
        };
    },
    methods: {
        addImage(event) {
            this.image = this.$refs.file.files[0];
        },

        async addPost() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/addPost",
                headers: {
                    "Content-Type": "multipart/form-data",
                },

                data: {
                    title: this.title,
                    text: this.text,
                    like: 0,
                    // id_user a modifié quand la table user sera fonctionnel
                    id_user: 2,
                    image: this.image,
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
