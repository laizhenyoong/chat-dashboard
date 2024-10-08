import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // Can be CONTACT, STARRED, SHARED
    },
    snackbar: {
        open: false,
        message: null,
        severity: null,
    },
    users: [],
    friends: [],
    friendRequests: [],
    chat_type: null,
    room_id: null,

}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Toggle Sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        // Update Sidebar Type
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
        openSnackbar(state, action) {
            state.snackbar.open = true;
            state.snackbar.severity = action.payload.severity;
            state.snackbar.message = action.payload.message;
        },
        closeSnackbar(state, action) {
            state.snackbar.open = false;
            state.snackbar.severity = null;
            state.snackbar.message = null;
        },
        updateUsers(state, action) {
            state.users = action.payload.users;
        },
        updateFriends(state, action) {
            state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
            state.friendRequests = action.payload.requests;
        },
        selectConversation(state, action) {
            state.chat_type = "individual";
            state.room_id = action.payload.room_id;
        }
    }
})

// Reducer
export default slice.reducer;

// 
export function ToggleSidebar() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.toggleSidebar())
    }
}

export function UpdateSidebarType(type) {
    return async (dispatch, getState) => {
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}

export function showSnackbar({ severity, message }) {
    return async (dispatch, getState) => {

        dispatch(slice.actions.openSnackbar({
            message,
            severity,
        }))

        setTimeout(() => {
            dispatch(slice.actions.closeSnackbar())
        }, 4000)
    }
}

export function closeSnackbar() {
    return async (dispatch, getState) => {
        dispatch(slice.actions.closeSnackbar())
    }
}

export function FetchUsers() {
    return async (dispatch, getState) => {
        await axios.get("/user/get-users", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            },
        }).then((response) => {
            console.log(response)
            dispatch(slice.actions.updateUsers({ users: response.data.data }))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function FetchFriends() {
    return async (dispatch, getState) => {
        await axios.get("/user/get-friends", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            },
        }).then((response) => {
            console.log(response)
            dispatch(slice.actions.updateFriends({ friends: response.data.data }))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function FetchFriendRequests() {
    return async (dispatch, getState) => {
        await axios.get("/user/get-requests", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            },
        }).then((response) => {
            console.log(response)
            dispatch(slice.actions.updateFriendRequests({ requests: response.data.data }))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const SelectConversation = ({ room_id }) => {
    return (dispatch, getState) => {
        dispatch(slice.actions.selectConversation({ room_id }))
    }
}
