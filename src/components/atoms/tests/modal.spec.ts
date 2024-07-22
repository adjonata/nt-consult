import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Modal from "../modal.vue";

const queries = {
  modal: '[data-test="modal"]',
  title: '[data-test="modal-title"]',
  close: '[data-test="modal-close"]',
};

describe("Modal.vue", () => {
  it("Default rendering", () => {
    const test = {
      title: "Nice",
    };
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
        title: test.title,
      },
    });
    const modalElement = wrapper.find(queries.modal);
    expect(modalElement.exists()).toBeTruthy();

    const titleElement = wrapper.find(queries.title);
    expect(titleElement.exists()).toBeTruthy();
    expect(titleElement.element.textContent).toEqual(test.title);

    const closeElement = wrapper.find(queries.close);
    expect(closeElement.exists()).toBeTruthy();
  });
});
