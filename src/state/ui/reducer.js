import { SET_UI } from './action-types';
import { ui as uiInitialState } from './initial-state';

export const ui = (state = uiInitialState, { type, payload }) => {
    switch (type) {
        case SET_UI:
            const { search } = payload;

            return {
                ...state,
                search
            };

        default:
            return state;
    }
};
