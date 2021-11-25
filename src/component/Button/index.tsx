import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | JSX.Element[];
  selected: boolean;
}

export function Button({ children, selected, ...rest}: ButtonProps) {
  return <ButtonContainer  {...rest} selected={selected}>{children}</ButtonContainer>;
}
