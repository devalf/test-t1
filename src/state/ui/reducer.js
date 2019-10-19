import { SET_UI } from './action-types';
import { ui as uiInitialState } from './initial-state';

export const ui = (state = uiInitialState, { type, payload }) => {
    switch (type) {
        case SET_UI:
            const { search, searchOne, searchTwo, condition } = payload;

            return {
                ...state,
                search,
                searchOne,
                searchTwo,
                condition
            };

        default:
            return state;
    }
};
