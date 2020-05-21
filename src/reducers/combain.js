import { combineReducers } from 'redux';
import { user } from './user';
import { doctor } from './doctor';
import { admin } from './admin';

export const allreducers = combineReducers({
    User: user,
    Doctor: doctor,
    Admin: admin,
})

//export default allreducers;