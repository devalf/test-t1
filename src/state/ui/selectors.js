import { createSelector } from 'reselect';

const selectUIState = state => state.ui;

export const selectUISearch = createSelector(
    selectUIState,
    ({ search }) => search
);

export const selectUISearchOne = createSelector(
    selectUIState,
    ({ searchOne }) => searchOne
);

export const selectUISearchTwo = createSelector(
    selectUIState,
    ({ searchTwo }) => searchTwo
);
