export const useraction = (id, email, name, chronic, allergic, blod) => {
    return {
        type: 'user',
        ID: id,
        email: email,
        fullname: name,
        chronic: chronic,
        allergic: allergic,
        blod: blod,
    }
}