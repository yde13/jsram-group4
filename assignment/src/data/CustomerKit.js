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

  getToken() {
    return localStorage.getItem("JWT_APP")
  }

  ourGetFetch(url) {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  ourDeleteFetch(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${this.getToken()}`,
        "content-type": "application/json"
      }
    })
  }

  ourEditFetch(url, payload) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }
}