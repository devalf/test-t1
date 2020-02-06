import { createReducer } from 'state/utils/createReducer';
import { normalizeData } from 'state/utils/normalize';
import { users as usersInitial } from './initialState';
import { actionTypes } from './actions';

const usersNormalized = normalizeData({ users: usersInitial });

const insertUsers = (state, { payload: { users } }) => {
    const newUsers = normalizeData({ users });

    return {
        ...state,
        entities: {
            users: {
                ...state.entities.users,
                ...newUsers.entities.users
            }
        },
        result: {
            users: [
                ...state.result.users,
                ...newUsers.result.users
            ]
        }
    };
};

const updateUser = (state, { payload }) => ({
    ...state,
    entities: {
        users: {
            ...state.entities.users,
            [payload.userId]: {
                ...state.entities.users[payload.userId],
                status: payload.status
            }
        }
    }
});

export const usersData = createReducer(usersNormalized, {
    [actionTypes.addUsers]: insertUsers,
    [actionTypes.editUser]: updateUser
});
