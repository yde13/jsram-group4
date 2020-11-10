const ROOT_URL = "https://frebi.willandskill.eu/"
const Customer_URL = `${ROOT_URL}api/v1/customers`


// eslint-disable-next-line import/no-anonymous-default-export
export default class {

  fetchAll() {
    return this.ourGetFetch(Customer_URL)
  }

  deleteOneCustomer(id) {
    const url = `${Customer_URL}/${id}/`
    return this.ourDeleteFetch(url)
  }

  editCustomerInfo(id, payload) {
    const url = `${Customer_URL}/${id}/`
    return this.ourEditFetch(url, payload)
  }

  createCustomer(payload) {
    const url = Customer_URL;
    return this.ourPostFetch(payload, url)
  }

  getToken() {
    return localStorage.getItem("JWT_APP")
  }

  checkVATNRValidation(vatnr){
    let nmr = vatnr.slice(0,2)
    let text = vatnr.slice(2,12)
    if(nmr === 'SE' && /^\d+$/.test(text) && vatnr.length === 12) {
      return true
    } else {
      return false
    }
  }

  ourGetFetch(url) {
    return fetch(url, {
      headers: this.ourPrivateHeaders()
    })
  }

  ourDeleteFetch(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: this.ourPrivateHeaders()
    })
  }

  ourEditFetch(url, payload) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: this.ourPrivateHeaders()
    })
  }

  ourPostFetch(payload, url){
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: this.ourPrivateHeaders()
    })
  }

  ourPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.getToken()}`
    }
  }
}