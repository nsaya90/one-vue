import { createRouter, createWebHistory } from "vue-router";

import PostView from "../views/PostView.vue";
import UpdatePostView from "../views/UpdatePostView.vue";

const routes = [
    {
        path: "/addpost",
        name: "addPost",
        component: PostView,
    },
    {
        path: "/update-post",
        name: "updatePost",
        component: UpdatePostView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
