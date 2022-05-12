import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ModalSettings, ModalsContextProps, ModalsContext} from "../../../contexts/context";
import {RootState} from "../../../store";
import {open, closeAll, close} from "../../../store/reducers/modal.reducer";
import {randomId} from "../../../utils";
import {Modal, ModalProps} from "./Modal";

export interface ModalsProviderProps {
    children: React.ReactNode;
    modalProps?: ModalSettings;
}

export const ModalProvider = (props: ModalsProviderProps) => {
    const {modalProps, children} = props;
    const state = useSelector((state: RootState) => state.modals);
    const dispatch = useDispatch();

    const openModal = (props: ModalSettings) => {
        const id = props.id || randomId();

        dispatch(open({
            id,
            props,
        }));

        return id;
    };

    const closeAllModals = () => {
        state.modals.forEach((modal) => {
            modal.props?.onClose?.();
        });

        dispatch(closeAll());
    };

    const closeModal = (id: string) => {
        if (state.modals.length <= 1) {
            closeAllModals();
            return;
        }

        const modal = state.modals.find((item) => item.id === id);

        modal?.props?.onClose?.();
        dispatch(close(modal?.id!));
    };

    const ctx: ModalsContextProps = {
        modals: state.modals,
        openModal,
        closeAll: closeAllModals,
        closeModal
    }

    const getCurrentModal = () => {
        if (state.current) {
            const {children: currentModalChildren, ...rest} = state.current?.props as ModalProps;

            return {
                modalProps: rest,
                content: <>{currentModalChildren}</>,
            };
        }

        return {
            modalProps: {},
            content: null,
        };
    };

    const {modalProps: currentModalProps, content} = getCurrentModal();

    return (
        <ModalsContext.Provider value={ctx}>
            <Modal
                {...modalProps}
                {...currentModalProps}
                onClose={() => closeModal(state.current?.id!)}
                opened={state.modals.length > 0}>
                {content}
            </Modal>
            {children}
        </ModalsContext.Provider>
    )
}
