import React, { InputHTMLAttributes } from "react";

import { FaSistrix } from "react-icons/fa";

import { ContainerInput } from "./styles";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: boolean;
  width: string;
  children?: JSX.Element | JSX.Element[];
}

export const Input = ({
  error = false,
  ...rest
}: InputProps) => {
 
  return (
    <ContainerInput>
        <input
          data-testid="input"
          {...rest}
          autoComplete="off"
        />
        <FaSistrix size='24px' />

    </ContainerInput>
  );
};

export default Input;
