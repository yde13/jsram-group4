const ROOT_URL = "https://frebi.willandskill.eu/"
const Customer_URL = `${ROOT_URL}api/v1/customers`


// eslint-disable-next-line import/no-anonymous-default-export
export default class {

  fetchAll() {
    return fetch(Customer_URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }

  deleteOneCustomer(id) {
    fetch(`${Customer_URL}/${id}/`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${this.getToken()}`,
        "content-type": "application/json"
      }
    })
  }

  getToken() {
    return localStorage.getItem("JWT_APP")
  }

  editCustomerInfo(id, payload) {
    return fetch(`${Customer_URL}/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
      }
    })
  }
}