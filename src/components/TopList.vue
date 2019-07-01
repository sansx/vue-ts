<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-tile v-else :key="item.title" avatar @click="titleClick(item.title)">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <v-list two-line>
          <template v-for="(item, index) in arrBox">
            <v-subheader v-if="typeof item === 'number'" :key="item">{{index}} is loading</v-subheader>
            <v-subheader v-else :key="item.id">
              <a :href="item.url" target="_blank">
                BY:{{item.by}}:
                <p>{{ item.title }}</p>
              </a>
            </v-subheader>
            <!-- <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider> -->

            <!-- <v-list-tile v-else :key="item.title" avatar @click="titleClick(item.title)">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>-->
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch, Mixins } from "vue-property-decorator";
import { watch } from "fs";
import MyMixin from "@/Mixin";

@Component
export default class TopList extends Mixins(MyMixin) {
  @Prop({
    type: Array,
    required: true
  })
  public topArr!: number[];

  public arrBox: any[] = [];

  public items: any[] = [
    { header: "Today" },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Brunch this weekend?",
      subtitle:
        "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle:
        "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
    },
    { divider: true, inset: true },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      title: "Oui oui",
      subtitle:
        "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    }
  ];

  created() {}

  @Watch("topArr")
  onArrChange(val: [], old: []) {
    this.arrBox = val.slice(0, 10);
    this.changeArr();
  }

  changeArr() {
    this.arrBox.forEach(
      (re: number, index: number): void => {
        this.apis.items.itemget(re).then(res => {
          console.log(res);
          this.$set(this.arrBox, index, res);
        });
      }
    );
    console.log(`get ten of Arr: ${this.arrBox}`);
    // console.log(`new value: ${val}, old value: ${old}, get ten of Arr: ${val.slice(0,10)}`)
  }

  titleClick = (e: string): void => {
    console.log(e);
  };
}
</script>

