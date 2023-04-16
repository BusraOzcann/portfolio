import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Contact from "../components/Contact"

const routes = [
    { path: '/', component: AboutMe },
    { path: '/projects', component: Projects },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router