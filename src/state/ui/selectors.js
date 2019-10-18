import { createSelector } from 'reselect';

const selectUIState = state => state.ui;

export const selectUISearch = createSelector(
    selectUIState,
    ({ search }) => search
);
