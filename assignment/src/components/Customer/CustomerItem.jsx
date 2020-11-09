import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomerKit from '../../data/CustomerKit';
import { CustomerContext } from '../../contexts/CustomersContext'
import { StyledItem } from '../../theme/testStyles';
import { StyledDeleteBtn } from '../../theme/testStyles';



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

  return (
    <StyledItem>
      <p>Name: {props.data[1].name}</p>
      <p>Email: {props.data[1].email}</p>
      <p>Phone: {props.data[1].phoneNumber}</p>
      <Link to={`customers/${props.data[1].id}`}><p>More Info</p></Link>
      <StyledDeleteBtn onClick={handleDeleteCustomer}>
        Delete
      </StyledDeleteBtn>
    </StyledItem>
  )
}
