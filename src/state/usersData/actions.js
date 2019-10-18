import { ADD_USERS, EDIT_USER } from './action-types';

export const addUsers = ({ users }) => {
    return {
        type: ADD_USERS,
        users
    };
};

export const editUserStatus = (userId, status) => {
    return {
        type: EDIT_USER,
        payload: {
            userId,
            status
        }
    };
};
