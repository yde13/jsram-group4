const ROOT_URL = "https://frebi.willandskill.eu/"
const Customer_URL = `${ROOT_URL}api/v1/customers`


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
}