import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Label from "../label.vue";

export const queries = {
  label: ".label",
  title: ".label__title",
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
    expect(labelElement.exists());

    const titleElement = wrapper.find(queries.title);
    expect(titleElement.exists());
    expect(titleElement.element.textContent).toEqual(test.label);
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
