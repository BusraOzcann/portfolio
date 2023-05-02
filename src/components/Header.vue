<template>
    <nav id="nav" class="navbar sticky-top navbar-expand-md bg-body-tertiary m-0 " style="height: 60px;">
      <div class="container-fluid" style="height: 100% !important;">
        <a class="navbar-brand" href="#">
            <!-- <img src="../assets/images/spaceship.gif" height="45" alt="" style="border-radius: 50%;"> -->
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" style="height: 100% !important;" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li v-for="menuItem in menuItems" :key="menuItem.id" v-on:click="selectMenuItem(menuItem.id)" :class="{ 'active': menuItem.id == selectedMenuId, 'nav-item': true, 'mx-2': true }">
              <a class="nav-link active" :href="'#'+menuItem.id">{{ menuItem.title }}</a>
            </li>

          </ul>

          <div class="d-flex ms-5">

            <v-tooltip text="Tema Değiştir" location="end">
              <template v-slot:activator="{ props }">
                <div v-bind="props" class="radio-btn" @click="changeTheme">
                  <div class="radio-inner" ></div>
                </div>
              </template>
            </v-tooltip>

            

          </div>
        </div>
      </div>
    </nav>
</template>

<script>
import {ref, onMounted, watch} from "vue"
import {useStore } from "vuex"
import $ from "jquery"

  export default {
    name: "Header",
    setup(){
        const store = useStore();
        let menuItems = ref([
          {title: "Hakkımda", id:""},
          {title: "Projeler", id:"projects"},
          { title: "Yetenekler", id: "skills" },
          {title: "Süreçler", id:"experience"},
          {title: "İletişim", id:"contact"}
        ])
        let lightTheme = ref('');
        let selectedMenuId = ref('aboutme')

        onMounted(() => {
          selectedMenuId.value = ''
          lightTheme.value = document.getElementById("app").getAttribute('data-theme');
          if(lightTheme == 'dark') $('.radio-inner').addClass("active")

          var scrollTimer;
          window.addEventListener("scroll", function () {
            if (scrollTimer) {
              clearTimeout(scrollTimer);
            }
            scrollTimer = setTimeout(function () {
              handleScroll()
            }, 70);

          });

        })


        let changeTheme = (e) => {
            $('.radio-inner').toggleClass("active")

            let app = document.getElementById("app");
            if(app.getAttribute('data-theme') == 'light') {
              localStorage.setItem('theme', 'dark')
              app.setAttribute('data-theme', 'dark')
              store.commit('changeTheme', 'dark')
              document.getElementById('nav').setAttribute('data-bs-theme', 'dark')
            }
            else if(app.getAttribute('data-theme') == 'dark') {
              localStorage.setItem('theme', 'light')
              app.setAttribute('data-theme', 'light');
              store.commit('changeTheme', 'light')
              document.getElementById('nav').removeAttribute('data-bs-theme')
            }

            lightTheme.value = app.getAttribute('data-theme')
        }

        let selectMenuItem = (menuItemId) => {
          selectedMenuId.value = menuItemId
        }

        let handleScroll = () => {
          // Tüm bölümleri al
          const sections = document.querySelectorAll('div[id^="aboutme"], div[id^="projects"], div[id^="experience"], div[id^="contact"], div[id^="skills"]');

          // Mevcut görünüm alanını al
          const viewportHeight = window.innerHeight;
          const scrollTop = window.scrollY;

          // Hangi bölümün görüntülendiğini kontrol et
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            if (rect.top == '60') {
              selectedMenuId.value = ''
              break;
            }
            else if (rect.top >= 0 && (rect.top) <= viewportHeight) {
                selectedMenuId.value = section.id;
                break;
            }
          }
          
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
    color: $text-color-light !important;
    transition: all $all-anim-transition;
  }
  [data-theme='light'] .scrolled{
    .navbar{
      background-color: $background-light !important;
      transition: all $all-anim-transition;
    }
  }

  [data-theme='light']{
    .navbar li.active {
      border-bottom: 2px solid $pink-color;
      transition: all $all-anim-transition;
    }

    .radio-inner{
      background-color: $background-light;
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
    color: $text-color-dark !important;
    transition: all $all-anim-transition;
  }

  [data-theme='dark'] .scrolled{
    .navbar{
      background-color: $background-dark !important;
      transition: all $all-anim-transition;
    }
  }

  [data-theme='dark']{
    .navbar li.active {
      border-bottom: 2px solid $yellow-color;
    }

    .radio-inner{
        background-color: $background-dark;
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

  #nav{
    .radio-btn{
      width: 75px;
      height: 33px;
      padding: 4px;
      border-radius: 50px;
      cursor: pointer;
      background-color: #a3d8ff;
      overflow: hidden;    
    }

    .radio-inner{
      position: relative;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      transition: all $all-anim-transition;
    }

    .radio-inner::before{
      content: "";
      position: absolute;
      top: 0;
      left: -40%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: scale(0);
      background-color: #a3d8ff;
      transition: all 0.3s;
    }

    .radio-btn .radio-inner.active{
      transform: translateX(calc(70px - 30px));
    }
    .radio-btn .radio-inner.active::before{
      left: -15px;
      transform: scale(1);
    }
  }

</style>
