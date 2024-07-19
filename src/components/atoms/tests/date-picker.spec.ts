import { describe, expect, it } from "vitest";

import { queries as labelQueries } from "./label.spec";
import { mount } from "@vue/test-utils";
import DatePicker from "../date-picker.vue";

const queries = {
  input: 'input[data-test="dp-input"]',
};

describe("DatePicker.vue", () => {
  it("Default rendering", () => {
    const test = {
      label: "Nice",
      name: "Nice date picker",
    };
    const wrapper = mount(DatePicker, {
      props: {
        label: test.label,
        name: test.name,
      },
    });
    const inputElement = wrapper.find(queries.input);
    expect(inputElement.exists()).toBeTruthy();

    const labelElement = wrapper.find(labelQueries.title);
    expect(labelElement.exists()).toBeTruthy();
    expect(labelElement.element.textContent).toEqual(test.label);
  });

  it("Change value test", () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: "Nice",
        name: "nice_name",
      },
    });

    const inputElement = wrapper.find(queries.input);
    const newValue = "A great value";
    inputElement.setValue(newValue);
    expect((inputElement.element as HTMLInputElement).value).toEqual(newValue);
  });
});
