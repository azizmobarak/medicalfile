const initialestate = {
    user: '',
    password: ''
}

export const doctor = (state = initialestate, action) => {
    switch (action.type) {
        case 'doctor':
            return state = {
                user: action.user,
                password: action.password
            }
        default:
            return initialestate;
    }
}