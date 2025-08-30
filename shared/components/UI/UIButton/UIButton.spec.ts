import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import TEST_TOKENS from "~/__tests__/TEST_TOKENS";
import UIButton from "~/shared/components/UI/UIButton/UIButton.vue";
import type { UIButtonProps } from "~/shared/components/UI/UIButton/types";

const fakeDefaultSlotValue = "Sign In";

function renderComponent(props?: Partial<UIButtonProps>) {
  return render(UIButton, {
    props: <UIButtonProps>{
      ...props,
    },
    slots: {
      default: fakeDefaultSlotValue,
    },
  });
}

describe("UIButton", () => {
  describe("Default:", () => {
    test("it will render the button with default slot value", () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>("button", { name: fakeDefaultSlotValue });
    });

    test("it will render the button with button type", async () => {
      const { getByRole } = renderComponent();
      const buttonEl = getByRole<HTMLButtonElement>("button");

      expect(buttonEl.type).toBe('button');
    });

    test("it will render not disabled button", async () => {
      const { getByRole, rerender } = renderComponent();
      const buttonEl = getByRole<HTMLButtonElement>("button");

      expect(buttonEl.disabled).toBeFalsy();
    });
  })

  describe("Reactive:", () => {
    test("it will render the button with submit type", async () => {
      const expectedType = 'submit';
      const { getByRole, rerender } = renderComponent({
        type: expectedType
      });
      const buttonEl = getByRole<HTMLButtonElement>("button");

      expect(buttonEl.type).toBe(expectedType);
    });

    test("it will render disabled button", async () => {
      const { getByRole, rerender } = renderComponent({ isDisabled: true });
      const buttonEl = getByRole<HTMLButtonElement>("button");

      expect(buttonEl.disabled).toBeTruthy();
    });

    test("it will render disabled button, if it has loading state", async () => {
      const { getByRole, getByTestId, rerender } = renderComponent({ isLoading: true });
      const button = getByRole<HTMLButtonElement>("button");

      expect(button.disabled).toBeTruthy();
    });

    test("it will render button with spinner, if it has loading state", async () => {
      const { getByTestId } = renderComponent({ isLoading: true });

      getByTestId(TEST_TOKENS.UI_SPINNER);
    });
  })

  describe("Actions:", () => {
    test("it will emit 'click'", async () => {
      const { getByRole, emitted } = renderComponent();
      const user = userEvent.setup();
      const buttonEl = getByRole<HTMLButtonElement>("button");

      await user.click(buttonEl);

      expect(emitted("click")).toBeTruthy();
    });

    test('it will not emit "click", if it has disabled state', async () => {
      const { getByRole, emitted } = renderComponent({ isDisabled: true });
      const user = userEvent.setup();
      const buttonEl = getByRole<HTMLButtonElement>("button");

      await user.click(buttonEl);

      expect(emitted("click")).toBeFalsy();
    });
  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
