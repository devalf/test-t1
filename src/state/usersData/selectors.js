import { createSelector } from 'reselect';

const selectUsersData = state => state.usersData;

const selectUsersDataEntities = createSelector(
    selectUsersData,
    ({ entities }) => entities
);

export const selectUsers = createSelector(
    selectUsersDataEntities,
    ({ users }) => users
);
