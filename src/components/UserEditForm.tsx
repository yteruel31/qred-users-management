import {yupResolver} from "@hookform/resolvers/yup";
import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {SchemaOf, object, string} from "yup";
import {useModals} from "../hooks/use-modals";
import {IUserDto} from "../services/dtos/user.dto";
import {UserService} from "../services/user.service";
import {updateUser} from "../store/reducers/user.reducer";
import Button from "./common/Button";
import {Input} from "./common/Input/Input";
import Stack from "./common/Layout/Stack";

type UserEditFormScheme = Omit<IUserDto, "company" | "username" | "website" | "name" | "id" | "address.geo" | "address.suite">

const schema: SchemaOf<UserEditFormScheme> = object({
    email: string()
        .email("Please type in a valid email address")
        .required(),
    address: object().shape({
        street: string().required(),
        city: string().required(),
        zipcode: string().required()
    }).required(),
    phone: string().required(),
}).defined();

const UserEditForm: React.FC<{ user: IUserDto }> = (props) => {
    const {user} = props;
    const dispatch = useDispatch();
    const modals = useModals();
    const {register, handleSubmit, formState: {errors}} = useForm<UserEditFormScheme>({defaultValues: {...user}, resolver: yupResolver(schema), mode: "onChange"});

    const onSubmit = handleSubmit(data => {
        UserService
            .update(user.id, data)
            .then(res => {
                dispatch(updateUser(res.data));
                toast.success("User updated");
                modals.closeModal("editUser");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error on update user request")
            });
    })

    return (
        <form onSubmit={onSubmit}>
            <Stack spacing={20}>
                <Input label="Street name" required errors={errors} {...register("address.street")}/>
                <Input label="Postal code" required errors={errors} {...register("address.zipcode")} />
                <Input label="City" required errors={errors} {...register("address.city")}/>
                <Input label="Email" required errors={errors} {...register("email")}/>
                <Input label="Phone" required errors={errors} {...register("phone")}/>
                <Button type="submit" style={{marginTop: "30px", width: "100%"}}>Save changes</Button>
            </Stack>
        </form>
    );
}

export default UserEditForm;
