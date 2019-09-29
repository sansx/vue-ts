import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import CountUp from "countup";

@Component({
  name: "CountTo"
})
export default class CountTo extends Vue {
  @Prop({ type: Number, default: 0 }) public readonly start!: number;
  @Prop({ type: Number, default: 999 }) public readonly end!: number;
  public counter!: CountUp;
  public get eleId() {
    return `count_to_${(this as any)._uid}`;
  }
  public update(endVal: number): void {
    this.counter.update(endVal);
  }
  protected mounted() {
    this.counter = new CountUp(this.eleId, this.start, this.end, 0, 1, {});
    // 创建CountUp实例，并保存在counter上
    this.counter.start(); // 调用此方法让动画效果开始
  }
  protected render() {
    return (
      <div class="count-up-wrap">
        <span id={this.eleId}></span>
      </div>
    );
  }
}
