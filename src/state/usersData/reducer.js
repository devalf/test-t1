import { createReducer } from 'state/utils/reducer-util';
import { normalizeData } from 'state/utils/normalize';
import { users as usersInitial } from './initial-state';
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
