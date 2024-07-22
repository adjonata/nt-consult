import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Stars from "../stars.vue";

const queries = {
  stars: '[data-test="stars"]',
  item: '[data-test="stars-item"]',
};

describe("Stars.vue", () => {
  it("Default rendering", () => {
    const test = {
      length: 5,
    };
    const wrapper = mount(Stars, {
      props: {
        length: test.length,
      },
    });
    const starElement = wrapper.find(queries.stars);
    expect(starElement.exists()).toBeTruthy();

    const starsItemsElements = wrapper.findAll(queries.item);
    expect(starsItemsElements.length).toEqual(test.length);
  });
});
