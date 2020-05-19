import { combineReducers } from 'redux';
import { sessionreducer, userreducer } from './session';

const allreducers = combineReducers({
    user: userreducer,
    session: sessionreducer,
})

export default allreducers;