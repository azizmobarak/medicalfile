import { combineReducers } from 'redux';

const valuereducer = (state = "nothing", action) => {
    switch (action.type) {
        case "value":
            return "value";
        case "novalue":
            return "no value";
        default:
            return state;
    }
}
export const changevalue = () => {
    return {
        type: "novalue"
    }
}


const allreducer = combineReducers({
    value: valuereducer
});

export default allreducer;