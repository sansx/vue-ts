import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { loginReq } from "@/api/user";
import Cookies from "js-cookie";
import { State, Action } from "vuex-class";

@Component
export default class LoginPage extends Vue {
  public user_name: string = "";
  public password: string | number = "";

  // 这里通过@Action('loginActions')装饰器指定loginAction是store里的loginActions方法
  @Action("loginActions") public loginAction: any;

  public login() {
    // loginReq({ user_name: this.user_name, password: this.password }).then(
    //   res => {
    //     const {
    //       data: { code, msg }
    //     } = res;
    //     if (code === 0) {
    //       Cookies.set("token", "value"); // 这里实际开发中不会在这个地方写，而是抽离到路由守卫或store中
    //       // 而且一般这个值不会是写死的字符串，而是从服务端返回的随机且唯一的字符串
    //       this.$router.push("/home");
    //     } else {
    //       console.error(msg);
    //     }
    //   }
    // );
    // 然后这里就可以直接调用loginAction方法
    // 效果和this.$store.dispatch('loginActions', { 参数 })是一样的
    this.loginAction &&
      this.loginAction({
        user_name: this.user_name,
        password: this.password
      }).then(() => {
        // 在store中的loginActions定义中，执行resolve方法的时机就是这里then中传入的这个函数执行的时机
        this.$router.push("/home"); // 在这跳转到home页
      });
  }

  protected render() {
    return (
      <div class="login-page">
        <input v-model={this.user_name} />
        <input
          v-model={this.password}
          type="password"
          style="margin-left: 10px;"
        />
        <button style="margin-left: 10px;" on-click={this.login}>
          登录
        </button>
      </div>
    );
  }
}
