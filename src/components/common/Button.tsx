import React, {forwardRef} from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  text-decoration: none;
  box-sizing: border-box;
  user-select: none;
  position: relative;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily};
  border: 1px solid #30D679;
  background-color: #30D679;
  box-shadow: 0 0.25em 2em -1em #000;;
  color: white;
  border-radius: 50px;
  padding: 0 22px;
  height: 42px;
  font-size: 16px;
  transition: background-color;
  transition-duration: 150ms;

  &:hover {
    background-color: #46ea7d;
  }
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: visible;
`

const Label = styled.span`
  white-space: nowrap;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const Button = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>((props, ref) => {
    const {children, ...rest} = props;

    return <StyledButton {...rest} ref={ref}>
        <Inner>
            <Label>{children}</Label>
        </Inner>
    </StyledButton>
})

export default Button;
