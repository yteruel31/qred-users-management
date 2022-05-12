import React from "react";
import UserProfile from "../components/UserProfile";
import UserList from "../pages/UserList";

export interface IRoute {
    path: string;
    Component: React.ElementType;
}

export const routes: IRoute[] = [
    {
        path: "/",
        Component: UserList
    },
    {
        path: "/users/:id",
        Component: UserProfile
    }
]
