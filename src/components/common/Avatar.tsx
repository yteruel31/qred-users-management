import React, {forwardRef} from "react";
import styled from "styled-components";

interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {
    src: string;
    width?: number;
    height?: number;
}

const StyledAvatar = styled.div<{width: number; height: number}>`
  box-sizing: border-box;
  position: relative;
  display: block;
  user-select: none;
  overflow: hidden;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
`;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
    const {src, width, height} = props;

    return (
        <StyledAvatar width={width!} height={height!} ref={ref}>
            <Image src={src}/>
        </StyledAvatar>
    )
});

Avatar.defaultProps = {
    width: 50,
    height: 50
}
