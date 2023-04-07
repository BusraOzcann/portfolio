<template>
  <div>
      <div  style="background: pink; width: 100%; height: 200px; display: flex;">
        <div>
          <v-btn to="/">
            HEADER
          </v-btn>
        </div>
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
      </div>

      <div style="width: 100%; heigth: 300px">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
@import "./assets/style/main.scss";

#app {
  
}
</style>
