import React, {forwardRef} from "react";
import ReactFocusLock from "react-focus-lock";
import {Transition, TransitionStatus} from "react-transition-group";
import styled from "styled-components";
import {Overlay} from "../Overlay";
import {Portal} from "../Portal";

export interface ModalProps extends Omit<React.ComponentPropsWithoutRef<'div'>, "title"> {
    onClose?(): void;

    opened: boolean;
    title?: React.ReactNode;
    zIndex?: number;
    id?: string;
    size?: number;
}

const ModalContainer = styled.div.attrs(
    (props: { state: TransitionStatus; zIndex: number; }) => props
)`
  position: fixed;
  z-index: ${props => props.zIndex};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition-property: opacity;
  transition-duration: 150ms;

  ${(props) =>
          props.state === "entering" &&
          `
            opacity: 0;
          `}
  ${(props) =>
          props.state === "exiting" &&
          `
            opacity: 0;
          `}
`;

const FocusLock = styled(ReactFocusLock)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledModal = styled.div`
  width: 20em;
  outline: 0;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 1;
  margin-left: calc(var(--removed-scroll-width, 0px) * -1);
  background-color: white;
  display: block;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.56);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: -9px;
`;

const Title = styled.div`
  margin-right: 10px;
  text-overflow: 'ellipsis';
  display: block;
  font-weight: 600;
  font-size: 20px;
  word-break: break-word;
`;

const Body = styled.div`
  word-break: break-word;
`;

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
    const {title, onClose, zIndex, opened, children} = props;

    return (
        <Portal zIndex={zIndex}>
            <Transition in={opened} timeout={150} unmountOnExit>
                {(state) => (
                    <ModalContainer state={state}  zIndex={zIndex!}>
                        <FocusLock>
                            <StyledModal role="dialog" aria-modal>
                                <Header>
                                    <Title>{title}</Title>
                                </Header>
                                <Body>
                                    {children}
                                </Body>
                            </StyledModal>
                            <Overlay onMouseDown={onClose}/>
                        </FocusLock>
                    </ModalContainer>
                )}
            </Transition>
        </Portal>
    )
})

Modal.defaultProps = {
    zIndex: 200
}
