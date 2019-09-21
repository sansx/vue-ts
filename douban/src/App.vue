<template>
  <v-app>
    <v-content>
      <TopList :topArr="arrRes" ></TopList>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import TopList from "./components/TopList.vue";
import MyMixin from './Mixin'

// interface test {
//   livedata?: any;
//   // age: number;
// }

@Component({
  components: { HelloWorld, TopList }
})
export default class App extends Mixins(MyMixin) {
  public arrRes:any[] = []

  private created() {
    this.apis.livedata.testget().then((res: number[]) => {
      this.arrRes = res
    });
  }
}

</script>
