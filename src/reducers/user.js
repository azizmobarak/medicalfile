const initialestate = {
    ID: '',
    email: '',
    fullname: '',
    chronic: '',
    allergic: '',
    blod: '',
}

export const user = (state = initialestate, action) => {
    switch (action.type) {
        case 'user':
            return state = {
                ID: action.user,
                email: action.email,
                fullname: action.fullname,
                chronic: action.chronic,
                allergic: action.allergic,
                blod: action.blod,
            }
        default:
            return initialestate;
    }
}