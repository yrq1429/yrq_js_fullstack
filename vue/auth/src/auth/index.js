export default {
    loggedIn () {
        return localStorage.token
    },
    login (email, pass, cb) {
        setTimeout(() => {
            if (email == 'joe@example.com' && pass === '111111') {
                const token = Math.random().toString(36).substring(7);
                localStorage.setItem('token', token);
                cb(true)
            }else {
                cb(false)
            }
        }, 500);
    }
}

