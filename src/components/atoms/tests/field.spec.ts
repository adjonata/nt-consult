import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import Field from "../field.vue";

const queries = {
  field: ".field",
  label: ".field__label",
  input: ".field__input",
};

describe("Field.vue", () => {
  it("Default rendering", () => {
    const test = {
      label: "Nice",
      name: "nice_name",
    };
    const wrapper = mount(Field, {
      props: {
        label: test.label,
        name: test.name,
      },
    });
    const fieldElement = wrapper.find(queries.field);
    expect(fieldElement.exists());

    const labelElement = wrapper.find(queries.label);
    expect(labelElement.exists());
    expect(labelElement.attributes("for")).toEqual(test.name);
    expect(labelElement.element.textContent).toEqual(test.label);

    const inputElement = wrapper.find(queries.input);
    expect(inputElement.exists());
    expect(inputElement.attributes("name")).toEqual(test.name);
    expect(inputElement.attributes("id")).toEqual(test.name);
  });

  it("Placeholder test", () => {
    const placeholder = "A great placeholder";
    const wrapper = mount(Field, {
      props: {
        label: "Nice",
        name: "nice_name",
        placeholder,
      },
    });

    const inputElement = wrapper.find(queries.input);
    expect(inputElement.attributes("placeholder")).toEqual(placeholder);
  });

  it("Custom type test", () => {
    const type = "password";
    const wrapper = mount(Field, {
      props: {
        label: "Nice",
        name: "nice_name",
        type,
      },
    });

    const inputElement = wrapper.find(queries.input);
    expect(inputElement.attributes("type")).toEqual(type);
  });

  it("Change value test", () => {
    const wrapper = mount(Field, {
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
