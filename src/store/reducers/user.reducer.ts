import {createSlice, PayloadAction, createSelector} from "@reduxjs/toolkit";
import {IUserDto} from "../../services/dtos/user.dto";
import {Selector, RootState} from "../index";

interface UserReducerState {
    users: IUserDto[]
}

const initialState: UserReducerState = {
    users: []
};

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        initUsers: (state, action: PayloadAction<IUserDto[]>) => ({
            users: action.payload
        }),
        updateUser: (state, action: PayloadAction<IUserDto>) => ({
            users: state.users.map(u => u.id === action.payload.id ? action.payload : u)
        })
    }
});

export const selectUserById = (
    id: number
): Selector<IUserDto | undefined> =>
    createSelector(
        [
            (state: RootState) =>
                state.users.users.find((v) => v.id === id),
        ],
        (result) => result
    );

export const {initUsers, updateUser} = userReducer.actions;

export default userReducer.reducer;
