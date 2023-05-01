import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Skills from "../components/Skills"

const routes = [
    { path: '/', component: AboutMe },
    { path: '/projects', component: Projects },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
    { path: '/skills', component: Skills },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router