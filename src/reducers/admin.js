const initialestate = {
    user: '',
    password: ''
}

export const admin = (state = initialestate, action) => {
    switch (action.type) {
        case 'admin':
            return state = {
                user: action.user,
                password: action.password
            }
        default:
            return initialestate;
    }
}


//export default admin;