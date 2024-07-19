import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Label from "../label.vue";

export const queries = {
  label: "[data-test='label']",
  title: "[data-test='label-title']",
  content: "[data-test='label-content']",
};

describe("Label.vue", () => {
  it("Default rendering", () => {
    const test = {
      label: "Nice label",
    };
    const wrapper = mount(Label, {
      props: {
        label: test.label,
      },
    });
    const labelElement = wrapper.find(queries.label);
    expect(labelElement.exists()).toBeTruthy();

    const titleElement = wrapper.find(queries.title);
    expect(titleElement.exists()).toBeTruthy();
    expect(titleElement.element.textContent).toEqual(test.label);

    const contentElement = wrapper.find(queries.content);
    expect(contentElement.exists()).toBeTruthy();
  });

  it("'for' attribute test", () => {
    const test = {
      label: "Nice label",
      for: "test_for",
    };
    const wrapper = mount(Label, {
      props: {
        label: test.label,
        for: test.for,
      },
    });
    const titleElement = wrapper.find(queries.title);
    expect(titleElement.attributes("for")).toBe(test.for);
  });
});
