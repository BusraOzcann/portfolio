<template>
  <div class="container-lg" >
      

      <div style="width: 100%; heigth: 300px;">
        <Header></Header>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from "./components/Header"

import {ref, onMounted} from "vue"

export default {
  name: 'App',
  setup(){
    components: {Header}

    onMounted(() => {
      if(localStorage.getItem("theme")){
        let app = document.getElementById("app")
        let currentTheme = localStorage.getItem("theme")
        if (currentTheme == 'light') app.setAttribute('data-color', 'light');
        else if (currentTheme == 'dark') app.setAttribute('data-color', 'dark')
      } else{
        localStorage.setItem('theme', 'light')
      }
    })

    
    return {Header}
  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";

#app {
  
}

</style>
