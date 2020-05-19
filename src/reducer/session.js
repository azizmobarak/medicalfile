export const sessionreducer = (state = false, action) => {
    switch (action.type) {
        case "open":
            return !state;
        default:
            return state;
    }
}

//reducer about user 
var res;
export const userreducer = (state = "", action) => {
    switch (action.type) {
        case "j":
            return 'new value'
        default:
            return "nouser";
    }
}