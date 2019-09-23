import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginPage extends Vue {
  public user_name: string = "";
  public password: string | number = "";

  login = () => {
    //
  };

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
