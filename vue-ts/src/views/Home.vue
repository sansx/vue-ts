<template>
  <div class="home">
    <count-to :start="10" :end="99999"></count-to>
    <count-to ref="counter" :end="99999"></count-to>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { loginReq } from "@/api/user";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CountTo from "@/components/CountTo";

@Component({
  name: "HomePage",
  components: {
    CountTo
  }
})
export default class Home extends Vue {
  protected mounted() {
    setInterval(() => {
      // this.$refs.counter as CountTo
      (this.$refs.counter as any).update(Math.random() * 10000); // 这样每2秒钟这里会更新一次，更新的值是随机的
    }, 2000);
  }
}
</script>
