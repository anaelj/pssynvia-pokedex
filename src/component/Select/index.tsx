import React, { InputHTMLAttributes } from "react";
import { ContainerSelect } from "./styles";
import Select from "react-select";

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  children?: JSX.Element | JSX.Element[];
}

export const MyCustonSelect = ({ children, ...rest }: InputProps) => {
  
  return (
    <ContainerSelect>
      <select {...rest} defaultValue={''} >
        {children}
      </select>
    </ContainerSelect>
  );
};

export default Select;
