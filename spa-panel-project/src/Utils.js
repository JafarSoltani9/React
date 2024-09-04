export const isLogin = (username) => {
    if (document.cookie == 'username=admin') return true
    return false
}