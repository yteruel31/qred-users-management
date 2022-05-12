import React, {forwardRef} from "react";
import styled from "styled-components";
import {InputWrapper, InputWrapperPropsBase} from "./InputWrapper";

interface InputProps extends InputWrapperPropsBase, React.ComponentPropsWithoutRef<'input'>{
    type?: 'text' | 'email' | 'tel';
}

export const StyledInput = styled.input`
  height: auto;
  appearance: none;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  display: block;
  text-align: left;
  border: 1px solid ${props => props.theme.colors.secondary};
  transition: border-color 100ms ease;
  padding: 0.8rem;
  border-radius: 6px;
  
  &:focus, &:focus-within {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &::placeholder {
    opacity: 1;
    user-select: none;
    color: #919191;
  }
`

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {label, errors, name, ...rest} = props;
    return <InputWrapper label={label} errors={errors} name={name}>
        <StyledInput {...rest} ref={ref} name={name}/>
    </InputWrapper>
})
