import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerKit from '../../data/CustomerKit';
import { CustomerContext } from '../../contexts/CustomersContext'
import styled from 'styled-components'
import { StyledItem } from '../../theme/testStyles';


export default function CustomerItem(props) {
  const { customerData, setCustomerData } = useContext(CustomerContext)

  // setCustomerData(customers)

  const customerKit = new CustomerKit()

  const id = props.value

  async function handleDeleteCustomer() {
    const res = await customerKit.deleteOneCustomer(id)
    if(res.status === 204) {
      let customerDataCopy = { ...customerData }

      customerDataCopy.results = customerData.results.filter((item, index) => item.id !== id)
  
      console.log(customerDataCopy);
      setCustomerData(customerDataCopy)
    } else {
      console.log('failed to delete customer');
    }

  }

  return (
    <StyledItem>
      <p>Name: {props.data[1].name}</p>
      <p>Email: {props.data[1].email}</p>
      <p>Phone number: {props.data[1].phoneNumber}</p>
      <Link to={`customers/${props.data[1].id}`}><p>More Info</p></Link>
      <button onClick={handleDeleteCustomer}>Delete</button>
    </StyledItem>
  )
}
