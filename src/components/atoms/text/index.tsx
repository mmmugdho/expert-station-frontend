import React from "react";
import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";

export interface TextProps extends BaseComponentProps {
  children: React.ReactNode;
  fontSize?: "primary" | "secondary" | "intermediate" | "tertiary";
  fontWeight?: "regular" | "medium" | "semiBold" | "bold";
  fontFamily?: "urbanist" | "grotesk" | "dm";
  color?: "blackCow" | "persianGreen";
  isRequired?: boolean;
}

export const Text = ({
  children,
  fontSize,
  fontWeight,
  fontFamily,
  color,
  className,
  isRequired,
}: TextProps) => {
  const componentClassName = "a-text";
  const modifiers = {
    [fontSize ?? ""]: !!fontSize,
    [fontWeight ?? ""]: !!fontWeight,
    [fontFamily ?? ""]: !!fontFamily,
    [color ?? ""]: !!color,
    [isRequired ? "isRequired" : ""]: true,
  };
  const { Container } = createComponentBase(componentClassName, "p");
  return (
    <Container className={className} modifiers={modifiers}>
      {children}
      {isRequired && (
        <Text fontSize="secondary" color="blackCow">
          *
        </Text>
      )}
    </Container>
  );
};
