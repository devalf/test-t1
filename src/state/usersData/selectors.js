import { createSelector } from 'reselect';
import { filter } from 'lodash';

import { selectUISearch, selectUISearchOne, selectUISearchTwo } from 'state/ui/selectors';

const selectUsersData = state => state.usersData;

const selectUsersDataEntities = createSelector(
    selectUsersData,
    ({ entities }) => entities
);

export const selectUsersFiltered = createSelector(
    [selectUsersDataEntities, selectUISearch, selectUISearchOne, selectUISearchTwo],
    ({ users }, search) => {
        const searchLowerCase = search.toLowerCase();

        return  filter(users, ({ name, role, connectedOn, status }) => {
            return !search ||
                `${name}`.toLowerCase().includes(searchLowerCase) ||
                `${role}`.toLowerCase().includes(searchLowerCase) ||
                `${connectedOn}`.toLowerCase().includes(searchLowerCase) ||
                `${status}`.toLowerCase().includes(searchLowerCase);
        });
    }
);
