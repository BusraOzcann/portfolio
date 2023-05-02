<template>
  <div class="container" :class="{ scrolled: isScrolled }" >

    <Header />

    <div>
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
    
  </div>
</template>

<script>
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Skills from "./components/Skills"

import {ref, onMounted} from "vue"
import { useStore } from "vuex"
import $ from "jquery"

export default {
  name: 'App',
  components: { Header, AboutMe, Projects, Experience, Contact, Skills },
  setup(){
    const store = useStore()
    let isScrolled = ref(false);
    
    let handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    }

    onMounted(() => {
      var app = document.getElementById("app")
      if (localStorage.getItem("theme")) {
        var currentTheme = localStorage.getItem("theme")
        store.commit('changeTheme', currentTheme);
        if (currentTheme == 'light') app.setAttribute('data-theme', 'light');
        else if (currentTheme == 'dark') {
          app.setAttribute('data-theme', 'dark');
          $('.radio-inner').addClass("active")
        } 
      } else {
        // default dark mode acılsın
        localStorage.setItem('theme', 'dark');
        app.setAttribute('data-theme', 'dark');
        $('.radio-inner').addClass("active")
        store.commit('changeTheme', 'dark');
      }

      window.addEventListener("scroll", handleScroll);
    })

    
    return {isScrolled, handleScroll, store}
  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";



</style>
