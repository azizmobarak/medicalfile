const adminaction = (user, password) => {
    return {
        type: 'admin',
        user: user,
        password: password
    }
}

export default adminaction;