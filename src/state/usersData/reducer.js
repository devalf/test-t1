import { ADD_USERS, EDIT_USER } from './action-types';
import { users as usersInitial } from './initial-state';
import { normalizeData } from 'state/utils/normalize';

const usersNormalized = normalizeData({ users: usersInitial });

export const usersData = (state = usersNormalized, { type, payload }) => {
    switch (type) {
        case ADD_USERS:
            const { users } = payload;
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

        case EDIT_USER:
            return {
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
            };

        default:
            return state;
    }
};
