export const isLoggedIn = () => {
    let token = localStorage.getItem('token');
    if (token != null) return true;
    return false;
}

export const doLogin = (data, next) => {
    localStorage.setItem('token', JSON.stringify(data));
    next();
}

export const doLogout = (data, next) => {
    localStorage.removeItem('token');
    next();
}

export const getToken = (next) => {
    if (isLoggedIn()) {
        return localStorage.getItem('token');
    }

    next();
}

