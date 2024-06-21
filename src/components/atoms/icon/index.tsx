import React from "react";
import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";
import { IconType } from "@/components/atoms/icon/iconlist";

export interface IconProps extends BaseComponentProps {
  children?: React.ReactNode;
  iconName: IconType;
  mask?: boolean;
}

export const Icon = ({ iconName, mask, className }: IconProps) => {
  const componentClassName = "a-icon";
  const modifiers = { [iconName]: !!iconName, [iconName + "-mask"]: !!mask };
  const { Container } = createComponentBase(componentClassName, "span");
  return <Container className={className} modifiers={modifiers}></Container>;
};
