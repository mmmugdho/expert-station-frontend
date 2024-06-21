"use client";
import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";
import { useEffect, useState } from "react";

export interface ButtonProps extends BaseComponentProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isForm?: boolean;
  size?: "small" | "medium" | "large" | "xLarge";
  color?: "white";
  backgroundColor?: "yellow" | "darkPink";

  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisable?: boolean;
  iconPosition?: "lt" | "rt";
}

export const Button = ({
  children,
  icon,
  size,
  color,
  backgroundColor,
  clickHandler,
  isForm,
  className,
  isDisable,
  iconPosition,
}: ButtonProps) => {
  const componentClassName = "a_button";
  const modifiers = {
    [size + "Size"]: !!size,
    [color + "Color"]: !!color,
    [backgroundColor + "BG"]: !!backgroundColor,
    [isDisable ? "isDisable" : ""]: true,
  };
  const { Container } = createComponentBase<"button">(
    componentClassName,
    "button"
  );
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  useEffect(() => {
    if (isDisable) setDisabledButton(isDisable);
    else setDisabledButton(false);
  }, [isDisable]);
  return (
    <Container
      type={isForm ? "submit" : "button"}
      onClick={clickHandler}
      className={className}
      modifiers={modifiers}
      disabled={disabledButton}
    >
      {iconPosition && iconPosition === "rt" ? (
        <>
          <span className="a-button__text">{children}</span> {!!icon && icon}
        </>
      ) : (
        <>
          {!!icon && icon} <span className="a-button__text">{children}</span>{" "}
        </>
      )}
    </Container>
  );
};
