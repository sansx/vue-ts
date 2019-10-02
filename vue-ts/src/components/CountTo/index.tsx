import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import CountUp from "countup";

@Component({
  name: "CountTo"
})
export default class CountTo extends Vue {
  @Prop({ type: Number, default: 0 }) public readonly start!: number;
  @Prop({ type: Number, default: 999 }) public readonly end!: number;
  @Emit("on-click") // 这里的on-click即为自定义事件名
  public click(event: DocumentEvent) {
    // 这个方法名用于组件内调用
    return event; // return的值即为事件回调函数的参数
  }
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
      <div class="count-up-wrap" on-click={this.click}>
        <span id={this.eleId}></span>
      </div>
    );
  }
}
