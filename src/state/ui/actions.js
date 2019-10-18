import { SET_UI } from './action-types';

export const setUI = (payload) => {
    return {
        type: SET_UI,
        payload
    };
};
