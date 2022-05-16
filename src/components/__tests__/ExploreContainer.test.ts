import { render } from "@testing-library/vue";

import ExploreContainer from "../ExploreContainer.vue";

describe("ExploreContainer", () => {
  it("renders correctly", () => {
    const wrapper = render(ExploreContainer, { props: { name: "Test Name" } });

    expect(wrapper).toBeTruthy();

    expect(wrapper.queryByText("Test Name")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const wrapper = render(ExploreContainer, { props: { name: "Test Name" } });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
