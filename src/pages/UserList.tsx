import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Column} from "react-table";
import {toast} from "react-toastify";
import {Card} from "../components/common/Card";
import {Container} from "../components/common/Layout/Container";
import Table from "../components/common/Table";
import UserProfile from "../components/UserProfile/UserProfile";
import {useModals} from "../hooks/use-modals";
import {IUserDto} from "../services/dtos/user.dto";
import {UserService} from "../services/user.service";
import {RootState} from "../store";
import {initUsers} from "../store/reducers/user.reducer";

const UserList: React.FC = () => {
    const {users} = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const modals = useModals();
    const columns: Column<IUserDto>[] = [
        {
            Header: "Username",
            accessor: "username"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Company",
            accessor: row => row.company.name
        },
    ]

    function handleRowOnClick(user: IUserDto) {
        modals.openModal({
            title: user.name,
            children: <UserProfile id={user.id} />
        })
    }

    useEffect(() => {
        UserService.getAll()
            .then(users =>
                dispatch(initUsers(users))
            )
            .catch(() => toast.error("Error for fill users"))
    }, [])

    return (
        <Container>
            <Card>
                <Table columns={columns} data={users} rowOnClick={handleRowOnClick}/>
            </Card>
        </Container>
    );
}

export default UserList;
