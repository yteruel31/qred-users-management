import React from "react";
import styled from "styled-components";

interface StackProps {
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    spacing?: number;
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  gap: ${props => props.spacing}px;
`

Stack.defaultProps = {
    spacing: 10,
    justify: "top",
    align: "stretch"
}

export default Stack
