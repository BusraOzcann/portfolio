<template>
  <div class="container" :class="{ scrolled: isScrolled }">

    <Header />

    <div>
      <AboutMe />
      <Projects />
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

import {ref, onMounted} from "vue"

export default {
  name: 'App',
  components: { Header, AboutMe, Projects, Experience, Contact },
  setup(){
    let isScrolled = ref(false);
    let handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    }

    onMounted(() => {
      if(localStorage.getItem("theme")){
        var app = document.getElementById("app")
        var currentTheme = localStorage.getItem("theme")
        if (currentTheme == 'light') app.setAttribute('data-theme', 'light');
        else if (currentTheme == 'dark') app.setAttribute('data-theme', 'dark')
      } else{
        localStorage.setItem('theme', 'dark')
      }

      window.addEventListener("scroll", handleScroll);
    })

    
    return {isScrolled, handleScroll}
  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";



</style>
