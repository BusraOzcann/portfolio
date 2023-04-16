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
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="../assets/images/spaceship.gif" height="75" alt="" style="border-radius: 50%;">
            <span class="ms-3">Büşra</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

            <li class="nav-item mx-4">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item mx-4">
              <a class="nav-link" href="#">Link</a>
            </li>
            </ul>
          <div class="d-flex">
            <v-btn prepend-icon="mdi-weather-night" @click="changeTheme">
                Tema Değiştir
            </v-btn>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    setup(){
        components: {  }

        let changeTheme = (e) => {
          console.log("fonk çalıştı")
            let app = document.getElementById("app");
            if(app.getAttribute('data-theme') == 'light') app.setAttribute('data-theme', 'dark')
            else if(app.getAttribute('data-theme') == 'dark') app.setAttribute('data-theme', 'light')
        }

        return { changeTheme }
    }
}
</script>

<style lang="scss">
</style>