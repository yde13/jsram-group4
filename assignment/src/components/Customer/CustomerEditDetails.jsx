import React, { useContext, useState } from 'react'
import styles from '../Signup/SignupForm.module.scss'
import CustomerKit from '../../data/CustomerKit'
import { CustomerContext } from '../../contexts/CustomersContext'

export default function CustomerEditDetails(props) {
  const { customerData, setCustomerData } = useContext(CustomerContext)
  const [customerForm, setCustomerForm] = useState({
    name: props.data.name,
    organisationNr: props.data.organisationNr,
    vatNr: props.data.vatNr,
    paymentTerm: props.data.paymentTerm,
    website: props.data.website,
    email: props.data.email,
    phoneNumber: props.data.phoneNumber 
  })


  const customerKit = new CustomerKit()
  const customerID = props.customerID

  function handlOnClickEditUser () {
    customerKit.editCustomerInfo(customerID, customerForm)
      .then(res => res.json())
      .then(data => {
        let customerDataCopy = {...customerData}
        customerDataCopy.results.unshift(data);
        setCustomerData(customerDataCopy);
      })
      .catch(e => console.log(e))
  }

  function handleInputOnChange(e) {
    setCustomerForm({...customerForm, [e.target.name]: e.target.value})
   
  }

  return (
    <div className={styles.signupForm}>
      <div className={styles.formBody}>
        <ul className={styles.flexOuter}>
          <li>
            <label htmlFor="name">name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              onChange={handleInputOnChange}
              value={customerForm['name']}
              placeholder="Enter your name here">  
            </input>
          </li>
          <li>
            <label htmlFor="organisationNr">organisationNr</label>
            <input type="text" 
              id="organisationNr" 
              name="organisationNr" 
              onChange={handleInputOnChange}
              value={customerForm['organisationNr']}
              placeholder="Enter your vatNr here"
              >
            </input>
          </li>
          <li>
            <label htmlFor="vatNr">vatNr</label>
            <input type="text" 
              id="vatNr" 
              name="vatNr" 
              onChange={handleInputOnChange}
              value={customerForm['vatNr']}
              placeholder="Enter your vatNr here">
            </input>
          </li>
          <li>
            <label htmlFor="text">paymentTerm</label>
            <input type="paymentTerm" 
              id="paymentTerm" 
              name="paymentTerm" 
              onChange={handleInputOnChange}
              value={customerForm['paymentTerm']}
              placeholder="Enter your paymentTerm here"></input>
          </li>
          <li>
            <label htmlFor="website">website</label>
            <input type="text" 
              id="website" 
              name="website" 
              onChange={handleInputOnChange}
              value={customerForm['website']}
              placeholder="Enter your website here"></input>
          </li>
          <li>
            <label htmlFor="email">email</label>
            <input type="email" 
              id="email" 
              name="email" 
              onChange={handleInputOnChange}
              value={customerForm['email']}
              placeholder="Enter your phoneNumber here">
            </input>
          </li>
          <li>
            <label htmlFor="phoneNumber">phoneNumber</label>
            <input type="text" 
              id="phoneNumber" 
              name="phoneNumber" 
              onChange={handleInputOnChange}
              value={customerForm['phoneNumber']}
              placeholder="Enter your phoneNumber here">
            </input>
          </li>
          <li>
            <button onClick={handlOnClickEditUser}>Submit New Info</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

