import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Spinner from "../spinner.vue";

const queries = {
  loader: "[data-test='loader']",
};

describe("Spinner.vue", () => {
  it("Default rendering", () => {
    const wrapper = mount(Spinner);
    const spinnerElement = wrapper.find(queries.loader);
    expect(spinnerElement.exists()).toBeTruthy();
  });

  it("Theme test", () => {
    const theme = "white";
    const wrapper = mount(Spinner, {
      props: {
        theme,
      },
    });
    const spinnerElement = wrapper.find(queries.loader);
    expect(spinnerElement.classes(theme)).toBeTruthy();
  });
});
