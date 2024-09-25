import { Dialog, DialogContent, Stack, Tab, Tabs } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchFriendRequests, FetchFriends, FetchUsers } from '../../redux/slices/app'
import { UserElement, FriendElement, FriendRequestElement } from '../../components/Friends'

const UserList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchUsers())
    }, [])

    const { users } = useSelector((state) => state.app)

    return (
        <>
            {users.map((el, idx) => {
                // TODO => Render User Component
                return <UserElement key={idx} {...el} />;
            })}
        </>
    )
}

const FriendsList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchFriends())
    }, [])

    const { friends } = useSelector((state) => state.app)

    return (
        <>
            {friends.map((el, idx) => {
                // TODO => Render Friend Component
                return <FriendElement key={idx} {...el} />;
            })}
        </>
    )
}

const FriendRequestsList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchFriendRequests())
    }, [])

    const { friendRequests } = useSelector((state) => state.app)

    return (
        <>
            {friendRequests.map((el, idx) => {
                // TODO => Render FriendRequests Component
                return <FriendRequestElement key={idx} {...el.sender} id={el._id} />;
            })}
        </>
    )
}

const Friends = ({ open, handleClose }) => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            keepMounted
            onClose={handleClose}
            sx={{ p: 4 }}
        >
            <Stack p={2} sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Explore" />
                    <Tab label="Friends" />
                    <Tab label="Requests" />

                </Tabs>
            </Stack>
            {/* Dialog Content */}
            <DialogContent>
                <Stack sx={{ height: "100%" }}>
                    <Stack spacing={2.5}>
                        {(() => {
                            switch (value) {
                                case 0: // Display all users
                                    return <UserList />;
                                case 1: // Display all friends
                                    return <FriendsList />;
                                case 2: // Display all friend requests
                                    return <FriendRequestsList />;
                                default:
                                    break;
                            }
                        })()}
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default Friends