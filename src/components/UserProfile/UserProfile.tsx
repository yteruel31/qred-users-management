import React from 'react';
import {useSelector} from "react-redux";
import {useModals} from "../../hooks/use-modals";
import {selectUserById} from "../../store/reducers/user.reducer";
import {Avatar} from "../common/Avatar";
import Button from "../common/Button";
import {Card} from "../common/Card";
import {Group} from "../common/Layout/Group";
import Stack from "../common/Layout/Stack";
import {Text} from "../common/Text";
import UserEditForm from "../UserEditForm";

const UserProfile: React.FC<{ id: number }> = (props) => {
    const {id} = props;
    const user = useSelector(selectUserById(id));
    const modals = useModals();

    if (user === undefined) {
        return null;
    }

    function handleEdit() {
        modals.openModal({
            title: `${user?.name} - Edit profile`,
            children: <UserEditForm user={user!}/>,
            id: "editUser"
        })
    }

    return (
        <Stack spacing={30}>
            <Card backgroundColor="#214749">
                <Group align="center" spacing={20}>
                    <Avatar src="https://i.pravatar.cc/400" width={100} height={100}/>
                    <Stack>
                        <Text color="white">{user.name}</Text>
                        <Text color="white">{user.email}</Text>
                        <Text color="white">{user.username}</Text>
                    </Stack>
                </Group>
            </Card>
            <Stack>
                <Group>
                    <Text
                        fontWeight="bold">Address</Text><Text>{user.address.suite} {user.address.street} {user.address.city} {user.address.zipcode}</Text>
                </Group>
                <Group>
                    <Text fontWeight="bold">Company</Text><Text>{user.company.name}</Text>
                </Group>
                <Group>
                    <Text fontWeight="bold">Phone</Text><Text>{user.phone}</Text>
                </Group>
            </Stack>
            <Group justify="flex-end">
                <Button onClick={handleEdit}>Edit</Button>
            </Group>
        </Stack>
    );
}

export default UserProfile;
