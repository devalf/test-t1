import { createSelector } from 'reselect';
import { filter } from 'lodash';

import { selectUISearch } from 'state/ui/selectors';

const selectUsersData = state => state.usersData;

const selectUsersDataEntities = createSelector(
    selectUsersData,
    ({ entities }) => entities
);

export const selectUsersFiltered = createSelector(
    [selectUsersDataEntities, selectUISearch],
    ({ users }, search) => {
        return  filter(users, ({ name, role, connectedOn, status }) => {
            return !search ||
                `${name}`.toLowerCase().includes(search.toLowerCase()) ||
                `${role}`.toLowerCase().includes(search.toLowerCase()) ||
                `${connectedOn}`.toLowerCase().includes(search.toLowerCase()) ||
                `${status}`.toLowerCase().includes(search.toLowerCase());
        });
    }
);
