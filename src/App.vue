<template>
  <div class="container" :class="{ scrolled: isScrolled }" >

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
import { useStore } from "vuex"

export default {
  name: 'App',
  components: { Header, AboutMe, Projects, Experience, Contact },
  setup(){
    const store = useStore()
    let isScrolled = ref(false);
    let handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    }

    onMounted(() => {

      if (localStorage.getItem("theme")) {
        var app = document.getElementById("app")
        var currentTheme = localStorage.getItem("theme")
        if (currentTheme == 'light') app.setAttribute('data-theme', 'light');
        else if (currentTheme == 'dark') app.setAttribute('data-theme', 'dark')
      } else {
        localStorage.setItem('theme', 'dark')
      }

      window.addEventListener("scroll", handleScroll);
    })


    const triggeredAnimations = () => {
      const animation_elements = document.querySelectorAll('#experience #contact #aboutme #projects');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const animClass = Array.from(entry.target.classList).filter((name) => name.startsWith('animate__'));
          if (entry.isIntersecting) {
            
            if (animClass) {
              entry.target.classList.remove(animClass[1]);
              setTimeout(() => {
                console.log("dnfbhgvdbhnjmdfköç")
                entry.target.classList.add(animClass[1]);
                store.commit('increaseAnimkey')
              });
            }
          }else{
            entry.target.classList.remove()
          }
        });
      }, {
        threshold: 0.5
      });

      animation_elements.forEach((el) => {
        observer.observe(el);
      });
    }

    
    return {isScrolled, handleScroll, store}
  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";



</style>
