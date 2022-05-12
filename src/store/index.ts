import {configureStore} from '@reduxjs/toolkit'
import {userApi} from "./api/user.api";
import modalReducer from "./reducers/modal.reducer";
import userReducer from "./reducers/user.reducer";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        modals: modalReducer,
        users: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false}).concat(
            userApi.middleware
        )
})

export type Selector<S> = (state: RootState) => S;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
