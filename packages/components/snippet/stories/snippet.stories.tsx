import React from "react";
import {ComponentMeta} from "@storybook/react";
import {snippet} from "@nextui-org/theme";

import {Snippet, SnippetProps} from "../src";

export default {
  title: "Components/Snippet",
  component: Snippet,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["flat", "solid", "bordered", "shadow"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "success", "warning", "danger"],
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["none", "base", "sm", "md", "lg", "xl", "full"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    disableCopy: {
      control: {
        type: "boolean",
      },
    },
    disableTooltip: {
      control: {
        type: "boolean",
      },
    },
    hideCopyButton: {
      control: {
        type: "boolean",
      },
    },
    hideSymbol: {
      control: {
        type: "boolean",
      },
    },
    symbol: {
      control: {
        type: "text",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Snippet>;

const defaultProps = {
  children: "npm install @nextui-org/react",
  symbol: "$",
  disableCopy: false,
  disableTooltip: false,
  hideCopyButton: false,
  hideSymbol: false,
  ...snippet.defaultVariants,
};

const Template = (args: SnippetProps) => <Snippet {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  ...defaultProps,
  children: [
    "npm install @nextui-org/react",
    "yarn add @nextui-org/react",
    "pnpm add @nextui-org/react",
  ],
};
