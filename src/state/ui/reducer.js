import { createReducer } from 'state/utils/createReducer';
import { actionTypes } from './actions';
import { ui as initialState } from './initialState';

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
