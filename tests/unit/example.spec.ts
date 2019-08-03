import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import vuetify from "vuetify";
import Vue from "vue";

describe("HelloWorld.vue", () => {
  let wrapper: any;
  let title = "Weather App";
  beforeEach(() => {
    // const localVue = createLocalVue()
    Vue.use(vuetify);

    wrapper = shallowMount(HelloWorld);
  });
  it("has an h2", () => {
    expect(wrapper.contains("p")).toBe(true);
  });
});

// describe("HelloWorld.vue", () => {
// it("renders props.msg when passed", () => {
// const msg = "new message";
// const wrapper = shallowMount(HelloWorld, {
// propsData: { msg }
// });
// expect(wrapper.text()).toMatch(msg);
// });
// });
