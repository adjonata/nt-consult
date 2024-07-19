import { describe, expect, it } from "vitest";
import { queries as labelQueries } from "./label.spec";
import { mount } from "@vue/test-utils";
import Field from "../field.vue";

const queries = {
  field: "[data-test='field']",
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
    expect(fieldElement.attributes("name")).toEqual(test.name);
    expect(fieldElement.attributes("id")).toEqual(test.name);

    const labelElement = wrapper.find(labelQueries.title);
    expect(labelElement.exists());
    expect(labelElement.attributes("for")).toEqual(test.name);
    expect(labelElement.element.textContent).toEqual(test.label);
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

    const fieldElement = wrapper.find(queries.field);
    expect(fieldElement.attributes("placeholder")).toEqual(placeholder);
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

    const fieldElement = wrapper.find(queries.field);
    expect(fieldElement.attributes("type")).toEqual(type);
  });

  it("Change value test", () => {
    const wrapper = mount(Field, {
      props: {
        label: "Nice",
        name: "nice_name",
      },
    });

    const fieldElement = wrapper.find(queries.field);
    const newValue = "A great value";
    fieldElement.setValue(newValue);
    expect((fieldElement.element as HTMLInputElement).value).toEqual(newValue);
  });
});
