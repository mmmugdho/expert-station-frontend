import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";
import React from "react";

export interface HeadingProps extends BaseComponentProps {
  children: React.ReactNode;
  tag?: "h1" | "h3";
  color?: "blackCow" | "persianGreen";
  underline?: "big" | "small";
  isRequired?: boolean;
}

export const Heading = ({
  children,
  color,
  className,
  underline,
  tag,
}: HeadingProps) => {
  const componentClassName = "a-heading";
  const modifiers = {
    [color ?? ""]: !!color,
    [tag ?? ""]: !!tag,
    [underline ?? ""]: !!underline,
  };
  const { Container } = createComponentBase(
    componentClassName,
    tag ? tag : "h3"
  );
  return (
    <Container className={className} modifiers={modifiers}>
      {children}
    </Container>
  );
};
