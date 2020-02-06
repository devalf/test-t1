export const actionTypes = {
    addUsers: 'ADD_USERS',
    editUser: 'EDIT_USER'
};

export const addUsers = (users) => ({
    type: actionTypes.addUsers,
    payload: {
        users
    }
});

export const editUserStatus = (userId, status) => ({
    type: actionTypes.editUser,
    payload: {
        userId,
        status
    }
});
