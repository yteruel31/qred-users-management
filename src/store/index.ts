import {configureStore} from '@reduxjs/toolkit'
import modalReducer from "./reducers/modal.reducer";
import userReducer from "./reducers/user.reducer";

export const store = configureStore({
    reducer: {
        modals: modalReducer,
        users: userReducer
    }
})

export type Selector<S> = (state: RootState) => S;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
