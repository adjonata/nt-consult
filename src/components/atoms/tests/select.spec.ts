import { describe, expect, it } from "vitest";

import { queries as labelQueries } from "./label.spec";
import { mount } from "@vue/test-utils";
import Select from "../select.vue";

const queries = {
  select: '[data-test="select"]',
};

describe("Select.vue", () => {
  it("Default rendering", () => {
    const test = {
      label: "Nice",
      name: "Nice date picker",
    };
    const wrapper = mount(Select, {
      props: {
        label: test.label,
        name: test.name,
        options: [
          { code: "1", label: "Option 1" },
          { code: "2", label: "Option 2" },
        ],
      },
    });
    const selectElement = wrapper.find(queries.select);
    expect(selectElement.exists()).toBeTruthy();

    const labelElement = wrapper.find(labelQueries.title);
    expect(labelElement.exists()).toBeTruthy();
    expect(labelElement.element.textContent).toEqual(test.label);
  });
});
