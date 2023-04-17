<template>
    <!-- <div style="background: pink; width: 100%; height: 200px; display: flex;">
        <div>
            <v-btn to="/about">
                ABOUT ME
            </v-btn>
        </div>
        <div>
            <v-btn to="/projects">
                PROJECTS
            </v-btn>
        </div>
    </div> -->
    <nav id="nav" class="navbar sticky-top navbar-expand-md bg-body-tertiary m-0" style="height: 60px;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="../assets/images/spaceship.gif" height="35" alt="" style="border-radius: 50%;">
            <span class="ms-3">Büşra Özcan</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li v-for="menuItem in menuItems" :key="menuItem.id" v-on:click="selectMenuItem(menuItem.id)" :class="{ 'active': menuItem.id === selectedMenuId, 'nav-item': true, 'mx-2': true }">
              <a class="nav-link active" :href="menuItem.id">{{ menuItem.title }}</a>
            </li>

          </ul>

          <div class="d-flex ms-5">
            <div class="row theme-btn" @click="changeTheme" style="cursor: pointer; width: 150px;">
              <div class="col-3 d-flex align-items-center " style="font-weight: 700;">
                <i v-if="lightTheme == 'light'" class="mdi mdi-weather-sunny" style="font-size: 20px"></i>
                <i v-if="lightTheme == 'dark'" class="mdi mdi-weather-night" style="font-size: 20px"></i>
              </div>
              <div class="col-9 d-flex align-items-center" style="font-weight: 700;">
                {{ lightTheme == 'light' ? 'Açık Mod' : 'Koyu Mod' }}
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import {ref, onMounted} from "vue"
  export default {
    name: "Header",
    setup(){
        components: {  }

        let menuItems = ref([
          {title: "Hakkımda", id:"#aboutme"},
          {title: "Projelerim", id:"#projects"},
          {title: "Süreçlerim", id:"#experience"},
          {title: "İletişim", id:"#contact"}
        ])
        let lightTheme = ref('');
        let selectedMenuId = ref('#aboutme')

        onMounted(() => {
          lightTheme.value = document.getElementById("app").getAttribute('data-theme');
        })

        let changeTheme = (e) => {
            let app = document.getElementById("app");
            if(app.getAttribute('data-theme') == 'light') {
              localStorage.setItem('theme', 'dark')
              app.setAttribute('data-theme', 'dark')
              document.getElementById('nav').setAttribute('data-bs-theme', 'dark')
            }
            else if(app.getAttribute('data-theme') == 'dark') {
              localStorage.setItem('theme', 'light')
              app.setAttribute('data-theme', 'light');
              document.getElementById('nav').removeAttribute('data-bs-theme')
            }

            lightTheme.value = app.getAttribute('data-theme')
        }

        let selectMenuItem = (menuItemId) => {
          selectedMenuId.value = menuItemId
        }

        return { changeTheme, lightTheme, menuItems, selectMenuItem, selectedMenuId }
    }
}
</script>

<style lang="scss">
@import "../assets/style/_variables.scss";

// light theme start ---------------------------------------------------------------------
  [data-theme='light'] #nav {
    .navbar-nav .nav-link, .navbar-brand, .navbar-toggler{
      color: $text-color-light !important;
      font-size: $navbar-font-size !important;
      font-weight: 800;
      &:is(.navbar-brand){
        font-size: $navbar-font-big-size !important;
        color: $text-color-light-darker !important;
      }
      &:is(.navbar-toggler){
        outline: 0;
      }
    }
  }
  [data-theme='light'] #nav .nav-item.active .nav-link{
    color: $text-color-light !important
  }
  [data-theme='light'] .scrolled{
    .navbar{
      background-color: $background-light !important;
    }
  }

  // light theme end  ---------------------------------------------------------------------


  // dark theme start  ---------------------------------------------------------------------
  [data-theme='dark'] #nav  {
    .navbar-nav .nav-link, .navbar-brand, .navbar-toggler{
      color: $text-color-dark !important;
      font-size: $navbar-font-size !important;
      font-weight: 800;
      &:is(.navbar-brand){
        font-size: $navbar-font-big-size !important;
      }
      &:is(.navbar-toggler){
        outline: 0;
      }
    }
  }

  [data-theme='dark'] #nav .nav-item.active .nav-link {
    color: $text-color-dark !important
  }

  [data-theme='dark'] .scrolled{
    .navbar{
      background-color: $background-dark !important;
    }

    
  }
  //dark theme end  ---------------------------------------------------------------------

  @media screen and (max-width: 760px) {
    [data-theme='light'] {
      .navbar-collapse{
        border: 2px solid;
        border-image: conic-gradient(from var(--angle), #ffc10a, #FFB200, #F2921D, #ef880b, #eb8100, #FFB200, #ffc10a) 1;
        z-index: 9999;
        background-color: $background-light-collapse-nav !important;
        padding-bottom: 10px;
        @media(max-width: 100px){
          border: 0 !important
        }
      }

      .navbar{
        button{
          color: $text-color-light !important;
          border: 0 !important;
          outline: none !important;
          span{
            color: $text-color-light !important
          }
        }
        button:focus{
          outline: none !important;
        }
      }
    }

    [data-theme='dark']{
      .navbar-collapse{
        z-index: 9999;
        background-color: $background-dark-collapse-nav !important;
        padding-bottom: 10px;
      }

      .navbar{
        button{
          color: $text-color-dark !important;
          border: 0 !important;
          outline: none !important;
          span{
            color: $text-color-dark !important
          }
        }
        button:focus{
          outline: none !important;
        }
      }
    }
  }

  .theme-btn{
    border: 2px solid;
    border-image: conic-gradient(from var(--angle), #ffc10a, #FFB200, #F2921D, #ef880b, #eb8100, #FFB200, #ffc10a) 1;
  }
  .theme-btn:hover {
    animation: 5s rotate linear infinite;
  }

  .navbar li.active {
    border-bottom: 2px solid #ffc10a;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

</style>