import { createReducer } from 'state/utils/reducer-util';
import { actionTypes } from './actions';
import { ui as initialState } from './initial-state';

const setUI = (state, { payload: { search, searchOne, searchTwo, condition } }) => ({
    ...state,
    search,
    searchOne,
    searchTwo,
    condition
});

export const ui = createReducer(initialState, {
    [actionTypes.setUI]: setUI
});
