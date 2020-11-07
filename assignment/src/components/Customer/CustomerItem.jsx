import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerKit from '../../data/CustomerKit';
import { CustomerContext } from '../../contexts/CustomersContext'
import styled from 'styled-components'


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

  const StyledItem  = styled.div`
    display: flex;
    flex-direction: column;

    background-color: black;
    color: white;
    margin: 10px;
    padding: 10px;
    font-size: 1.3rem;
  `

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
