import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from "../components/AboutMe"
import Header from "../components/Header"
import Projects from "../components/Projects"

const routes = [
    { path: '/', component: Header },
    { path: '/about', component: AboutMe },
    { path: '/projects', component: Projects },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router