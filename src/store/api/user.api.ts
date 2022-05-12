import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {IUserDto} from "../../services/dtos/user.dto";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: build => ({
        getUsers: build.query<IUserDto[], void>({
            query: () => "/users"
        }),
        getUser: build.query<IUserDto, number>({
            query: arg => `/users/${arg}`,
        }),
        updateUser: build.mutation<IUserDto, { id: number, body: Record<string, any> }>({
            query: ({id, body}) => ({
                url: `/users/${id}`,
                method: "PUT",
                body
            }),

        })
    }),
});

export const {useGetUsersQuery, useGetUserQuery, useUpdateUserMutation} = userApi;
