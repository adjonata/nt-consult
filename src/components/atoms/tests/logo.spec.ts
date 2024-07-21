import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Logo from "../logo.vue";

const queries = {
  logo: "[data-test='logo']",
  image: "[data-test='logo-image']",
};

describe("Logo.vue", () => {
  it("Default rendering", () => {
    const wrapper = mount(Logo);

    const logoElement = wrapper.find(queries.logo);
    expect(logoElement.exists()).toBeTruthy();

    const imageElement = wrapper.find(queries.image);
    expect(imageElement.exists()).toBeTruthy();
  });
});
