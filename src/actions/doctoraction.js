export const doctoraction = (user, password) => {
    return {
        type: 'doctor',
        user: user,
        password: password
    }
}