import { Vue, Component } from "vue-property-decorator";
import apis from "./api/index"
// import { default as apis } from "./api/index"
// const { default: apis } = require("./api/index");


@Component
export default class MyMixin extends Vue {
  mixinValue = 'Hello'
  $apis = apis
}

