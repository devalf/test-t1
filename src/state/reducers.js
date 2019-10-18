import { combineReducers } from 'redux';

import { usersData } from './usersData/reducer';
import { ui } from './ui/reducer';

export const reducers = combineReducers({
    usersData,
    ui
});
