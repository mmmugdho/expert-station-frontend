import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";

export interface UnderlineProps extends BaseComponentProps {
  type: "big" | "small";
}

export const Underline = ({ type, className }: UnderlineProps) => {
  const componentClassName = "a-underline";
  const modifiers = {
    [type ?? ""]: !!type,
  };
  const { Container } = createComponentBase(componentClassName, "div");
  return <Container className={className} modifiers={modifiers}></Container>;
};
