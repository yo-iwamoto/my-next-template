import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const variants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const;
const sizes = ["default", "sm", "lg", "icon"] as const;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold capitalize">{variant}</h3>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <Button key={`${variant}-${size}`} variant={variant} size={size}>
                {size === "icon" ? "🔍" : `${variant} ${size}`}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
