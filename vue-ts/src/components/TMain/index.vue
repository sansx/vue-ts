<template>
    <div class="t-main-wrap">
        <!-- 布局容器组件 -->
        <a-layout style="height: 100%">
          <!-- 左侧容器组件 -->
          <a-layout-sider></a-layout-sider>
          <a-layout>
            <!-- 顶部容器组件 -->
            <a-layout-header style="background: #fff"></a-layout-header>
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
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'TMain'
})
export default class TMain extends Vue {}
</script>

<style lang="less">
.t-main-wrap{
    height: 100%;
}
</style>