import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ModalState} from "../../contexts/context";

interface ModalReducerState {
    modals: ModalState[];
    current: ModalState | null;
}

const initialState: ModalReducerState = {
    modals: [],
    current: null
};

const modalReducer = createSlice({
    name: "modal",
    initialState,
    reducers: {
        open: (state, action: PayloadAction<ModalState>) => ({
            current: action.payload,
            modals: [...state.modals, action.payload],
        }),
        close: (state, action: PayloadAction<string>) => ({
            current: state.modals[state.modals.length - 2] || null,
            modals: state.modals.filter((m) => m.id !== action.payload),
        }),
        closeAll: (state) => ({
            current: state.current,
            modals: [],
        })
    }
});

export const {open, close, closeAll} = modalReducer.actions;

export default modalReducer.reducer;
