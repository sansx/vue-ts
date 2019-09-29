import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import CountUp from "countup";

@Component({
  name: "CountTo"
})
export default class CountTo extends Vue {
  public counter!: CountUp;
  public get eleId() {
    return `count_to_${(this as any)._uid}`;
  }
  protected render() {
    return (
      <div class="count-up-wrap">
        <span id={this.eleId}></span>
      </div>
    );
  }
  protected mounted() {
    this.counter = new CountUp(this.eleId, 0, 1000, 0, 1, {});
    // 创建CountUp实例，并保存在counter上
    this.counter.start(); // 调用此方法让动画效果开始
  }
}
