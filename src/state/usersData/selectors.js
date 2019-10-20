import { createSelector } from 'reselect';
import { filter } from 'lodash';

import { statuses } from 'constants/statuses';
import {
    selectUISearch,
    selectUISearchOne,
    selectUISearchTwo,
    selectUISearchCondition
} from 'state/ui/selectors';

const selectUsersData = state => state.usersData;

const selectUsersDataEntities = createSelector(
    selectUsersData,
    ({ entities }) => entities
);

export const selectUsersFiltered = createSelector(
    [
        selectUsersDataEntities,
        selectUISearch,
        selectUISearchOne,
        selectUISearchTwo,
        selectUISearchCondition
    ],
    ({ users }, search, searchOne, searchTwo, searchCondition) => {
        let filtered = [];

        if (!searchOne && !searchTwo && !searchCondition) {
            filtered = filterUsersAllColumns(users, search.toLowerCase());
        } else {
            if (searchCondition === 'and') {
                filtered = filterUsersAllColumns(users, searchOne.toLowerCase());
                filtered = filterUsersAllColumns(filtered, searchTwo.toLowerCase());
            } else if (searchCondition === 'or') {
                filtered = filterUsersAllColumns(users, searchOne.toLowerCase());

                if (!filtered.length) {
                    filtered = filterUsersAllColumns(users, searchTwo.toLowerCase());
                }
            }
        }

        return filtered;
    }
);

const filterUsersAllColumns = (users, text) => {
    return filter(users, ({ name, role, connectedOn, status }) => {
        return !text ||
            `${name}`.toLowerCase().includes(text) ||
            `${role}`.toLowerCase().includes(text) ||
            `${connectedOn}`.toLowerCase().includes(text) ||
            `${status}`.toLowerCase().includes(text);
    });
};

export const selectUsersStatusesCountMap = createSelector(
    selectUsersDataEntities,
    ({ users }) =>
        statuses.map(userStatus => ({
                status: userStatus,
                count: filter(users, ({ status }) => status === userStatus).length
            })
        )
);
