import React from "react";
import styled from "styled-components";

interface TextProps {
    fontSize?: number;
    fontWeight?: React.CSSProperties['fontWeight'];
    color?: React.CSSProperties['color'];
}

export const Text = styled.div<TextProps>`
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

Text.defaultProps = {
    fontWeight: 500,
    fontSize: 16
}
