import React from "react";
import styled from "styled-components";

interface GroupProps {
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    spacing?: number;
    direction?: "row" | "column";
}

export const Group = styled.div<GroupProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  gap: ${props => props.spacing}px;
  flex-wrap: wrap;
`;

Group.defaultProps = {
    spacing: 10,
    direction: "row"
}
