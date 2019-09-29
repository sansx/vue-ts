<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { loginReq } from "@/api/user";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  name: 'HomePage'
})
export default class Home extends Vue {}
</script>
