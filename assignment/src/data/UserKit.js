const jwt = require('jsonwebtoken')
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
        return this.ourPostFetch(payload, LOGIN_URL, 'public')
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
        return this.ourPostFetch(payload, USER_URL, 'public')
    }

    activateAccount(uid, token) {

        const payload = {
            uid, token
        };
          
        return this.ourPostFetch(payload, ACTIVATE_USER_URL, 'public')
    }

    getMe() {
        const url = `${API_URL}me`
        return this.ourGetFetch(url, 'private')
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

    decodeToken() {
        let decoded = jwt.decode(this.getToken());
        
        if(decoded !== null) {
            if (Date.now() >= decoded.exp * 1000) {
                return false;
              } else {
                return true
              }
        } else {
            return false
        }
       
    }

    ourPostFetch(payload, url, type){
        let headers = {}
        type === 'public' ? headers = this.ourPublicHeaders() : headers = this.ourPrivateHeaders()
        console.log(headers);
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: headers
        })
    }

    ourGetFetch(url, type) {
        let headers = {}
        type === 'public' ? headers = this.ourPublicHeaders() : headers = this.ourPrivateHeaders()
        console.log(headers);
        return fetch(url, { headers: headers })
    }

    ourPrivateHeaders() {
        return {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${this.getToken()}`
        }
    }

    ourPublicHeaders() {
        return {
            "Content-Type": "application/json"
        }
    }
    

}