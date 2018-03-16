<template>
  <div>
  <div id="app">
    <v-container>
      <!-- Cards -->
      <v-layout>
        <v-flex xs12 sm4 v-for="i in 4" :key="`1${i}`">
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>
                  Located two hours south of Sydney in the
                  <br>Southern Highlands of New South Wales, ...
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- #/Cards -->
      <Table/>
      <!--<router-view/>-->
      <div class="headline text-xs-center pa-5">Active: {{ e1 }}</div>
    </v-container>
  </div>
    <!-- Bottom Nav-->
    <div id="bottom-nav">
      <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
        <v-btn flat color="teal" value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="favorites">
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="nearby">
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </div>
    <!-- #/ Bottom Nav -->
  </div>
</template>

<script>
import Table from './components/Table';

export default {
  name: 'App',
  components: {
    Table,
  },
  data() {
    return {
      e1: 'recent',
    };
  },
};
</script>

<style>
html {
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#bottom-nav{
  bottom: 0;
}
</style>
