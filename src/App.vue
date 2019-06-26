<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

interface test {
  livedata?: any;
  // age: number;
}

@Component({
  components: { HelloWorld }
})
export default class App extends Vue {
  src: string = "https://img2.vipcn.com/img2016/6/21/2016062150586477.jpg";
  description: string = "Saber-阿尔托莉雅·潘德拉贡";
  public $apis!: test;

  private created() {
    this.$apis.livedata.testget().then((res: number[]) => {
      console.log(res);
    });
  }
}
</script>
