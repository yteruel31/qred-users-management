import styled from "styled-components";

export const Card = styled.div<{backgroundColor?: string}>`
  text-decoration: none;
  display: block;
  outline: 0;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 8px 2px #00000084;
  overflow: auto;
  padding: 1.5rem;
  background-color: ${props => props.backgroundColor};
`;

Card.defaultProps = {
    backgroundColor: "white"
}
