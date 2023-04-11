import Cookies from 'js-cookie'

export const handleLogin = (email) => {
    Cookies.set('email', email, { path: '/', expires: 14 });
    Cookies.set('isLogin', true, { path: '/', expires: 14 });
}

export const handleLogout = () => {
    Cookies.remove('email', { path: '' });
    Cookies.remove('isLogin', { path: '' })
}