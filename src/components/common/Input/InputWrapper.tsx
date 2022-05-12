import {ErrorMessage} from "@hookform/error-message";
import React, {forwardRef} from "react";
import {FieldErrors} from "react-hook-form";
import styled from "styled-components";

export interface InputWrapperPropsBase {
    label?: React.ReactNode;
    errors?: FieldErrors<any>;
    name?: string;
}

export interface InputWrapperProps extends InputWrapperPropsBase, React.ComponentPropsWithoutRef<"div"> {
}

const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
`

const ErrorLabel = styled.div`
  color: red;
  margin-top: 5px;
`;

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>((props, ref) => {
    const {children, label, errors, name} = props;

    return (<div ref={ref}>
        <Label>{label}</Label>
        {children}
        {errors && <ErrorMessage
            name={name!}
            errors={errors}
            render={({message}) => (
                <ErrorLabel>{message}</ErrorLabel>
            )}
        />}

    </div>)
})
