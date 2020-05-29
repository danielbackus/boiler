import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => (
  <Button
    text={text("Text", "Button Text")}
    disabled={boolean("Disabled", false)}
    onClick={action("onClick")}
  />
);
