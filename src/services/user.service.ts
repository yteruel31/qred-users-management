import axios from "axios";
import {IUserDto} from "./dtos/user.dto";

type IUserUpdateBody = Omit<IUserDto, "company" | "username" | "website" | "name" | "id" | "address.geo" | "address.suite">

export class UserService {
    static async getAll() {
        const res = await axios.get<IUserDto[]>("https://jsonplaceholder.typicode.com/users");

        return res.data;
    }

    static async update(id: number, body: IUserUpdateBody) {
        return axios.put<IUserDto>(`https://jsonplaceholder.typicode.com/users/${id}`, body);
    }
}


