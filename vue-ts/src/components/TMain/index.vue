<template>
  <div class="t-main-wrap">
    <!-- 布局容器组件 -->
    <a-layout style="height: 100%">
      <!-- 左侧容器组件 -->
      <a-layout-sider>
        <a-menu
          :selected-keys="[this.$route.path]"
          @click="handleClickMenu"
          theme="dark"
          style="width: 100%"
          mode="inline"
        >
          <a-menu-item key="/home">首页</a-menu-item>
          <a-menu-item key="/about">介绍页</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <!-- 顶部容器组件 -->
        <a-layout-header style="background: #fff;text-align: right;">
          <a-dropdown>
            <a-avatar>{{ userName }}</a-avatar>
            <a-menu @click="handleClickAvatarMenu" slot="overlay">
              <a-menu-item key="logout">退出登录</a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-layout-header>
        <!-- 内容容器组件 -->
        <a-layout-content>
          <!-- 路由视图渲染组件 -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
// 注意，这个清楚cookie中token的逻辑，最好放到store中用专门的mutation去清除store中用户信息的同时清楚token
import Cookie from "js-cookie";

@Component({
  name: "TMain"
})
export default class TMain extends Vue {
  @State("user_name") public userName: any; // 将store.state.user_name赋给userName

  @Mutation("setUserInfoMutations") public setUserInfo: any;

  public handleClickAvatarMenu({ item, key, keyPath }: any) {
    if (key === "logout") {
      this.logout();
    }
  }

  public logout() {
    this.setUserInfo({ user_name: "", email: "" });
    Cookie.set("token", "");
    this.$router.push("/login");
  }

  public handleClickMenu({ item, key, keyPath }: any) {
    this.$router.push(key);
  }
}
</script>

<style lang="less">
.t-main-wrap {
  height: 100%;
}
</style>
