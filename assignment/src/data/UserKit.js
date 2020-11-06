const ROOT_URL = "https://frebi.willandskill.eu/"
const API_URL = `${ROOT_URL}api/v1/`
const AUTH_URL = `${ROOT_URL}auth/`
const LOGIN_URL = `${ROOT_URL}api-token-auth/`
const USER_URL = `${AUTH_URL}users/`
const ACTIVATE_USER_URL = `${USER_URL}activate`

// eslint-disable-next-line import/no-anonymous-default-export
export default class {

    login(email, password) {
        const payload = {
            email, password
        }

        return this.ourPostFetch(payload, LOGIN_URL)
    }

    signup(signupData) {
        const payload = {
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            email: signupData.email,
            password: signupData.password,
            organisationName: signupData.organisationName,
            organisationKind: signupData.organisationKind
        }

        return this.ourPostFetch(payload, USER_URL)
    }

    activateAccount(uid, token) {
        const payload = {
            uid, token
        };
        
        return this.ourPostFetch(payload, ACTIVATE_USER_URL)
    }

    getMe() {
        const url = `${API_URL}me`
        return this.ourGetFetch(url)
    }

    setToken(token) {
        localStorage.setItem("JWT_APP", token)
    }

    getToken() {
        return localStorage.getItem("JWT_APP")
    }

    setUserInfo(userData) {
        localStorage.setItem("userData", JSON.stringify(userData))
    }

    logOutUser() {
        localStorage.removeItem("JWT_APP")
        localStorage.removeItem("userData")
    }

    ourPostFetch(payload, url) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.getToken()}`
            }
        })
    }

    ourGetFetch(url) {
        return fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.getToken()}`
            }
        })
    }

}