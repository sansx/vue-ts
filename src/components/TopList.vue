<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-container id="scroll-target" class="scroll-y">
        <v-card v-scroll="onScroll">
          <v-list two-line>
            <v-subheader>top500</v-subheader>
            <template v-for="(item, index) in arrBox">
              <v-list-tile v-if="typeof item === 'number'" :key="item">{{index+1}} is loading</v-list-tile>
              <v-list-tile v-else :key="item.title" avatar @click="openWindow(item.url)">
                <v-list-tile-avatar>
                  <img
                    :src="'https://www.gravatar.com/avatar/'+getMd5(item.by)+'?d=identicon&s=180'"
                  />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.by"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch, Mixins } from "vue-property-decorator";
import { watch } from "fs";
import MyMixin from "@/Mixin";
import md5 from "js-md5";

@Component
export default class TopList extends Mixins(MyMixin) {
  @Prop({
    type: Array,
    required: true
  })
  public topArr!: number[];

  public arrBox: any[] = [];

  public offsetTop: string | number = 0;

  created() {}

  @Watch("topArr")
  onArrChange(val: [], old: []) {
    this.arrBox = val.slice(0, 10);
    this.changeArr();
  }

  changeArr() {
    this.arrBox.forEach((re: number, index: number): void => {
      this.apis.items.itemget(re).then(res => {
        console.log(res);
        this.$set(this.arrBox, index, res);
      });
    });
    console.log(`get ten of Arr: ${this.arrBox}!!`);
    // console.log(`new value: ${val}, old value: ${old}, get ten of Arr: ${val.slice(0,10)}`)
  }

  openWindow(url: string) {
    window.open(url);
  }

  getMd5(str: string) {
    return md5(str);
  }

  onScroll(e: any) {
    const el = e.target.scrollingElement
    this.offsetTop = e.target.scrollTop;
    console.log(e, el.clientHeight, el.scrollHeight , el.scrollTop);
    
  }

  titleClick = (e: string): void => {
    console.log(e);
  };
}
</script>

