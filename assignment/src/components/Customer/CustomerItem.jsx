import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerKit from '../../data/CustomerKit';
import { CustomerContext } from '../../contexts/CustomersContext'

export default function CustomerItem(props) {
  const { customerData, setCustomerData } = useContext(CustomerContext)

  // setCustomerData(customers)

  const customerKit = new CustomerKit()

  const id = props.value

  function handleDeleteCustomer() {
    customerKit.deleteOneCustomer(id)
    let customerDataCopy = { ...customerData }

    customerDataCopy.results = customerData.results.filter((item, index) => item.id !== id)

    console.log(customerDataCopy);
    setCustomerData(customerDataCopy)
  }


  function test() {
    let customerDataCopy = { ...customerData }

    customerDataCopy.results.map((item, index) => {
      if (item.id === id) {
        console.log('Rätt id', item);
        customerDataCopy.results.splice(index, 1)


      } else {
        console.log('fel id');

      }
    })
    console.log(customerDataCopy.results);

  }



  return (
    <div>
      <p>Name: {props.data[1].name}</p>
      <p>Email: {props.data[1].email}</p>
      <p>Phone number: {props.data[1].phoneNumber}</p>
      <button onClick={handleDeleteCustomer}>Delete</button>
      <button onClick={test}>Test</button>
      {/* <Link link="/customers"><p>More Info</p></Link> */}
    </div>
  )
}
