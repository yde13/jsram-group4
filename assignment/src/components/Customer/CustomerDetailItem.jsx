import React, {useContext} from 'react'
import { LabelContainer, InfoContainer, StyledDetailPage, DetailHeader, StyledDeleteButton } from '../../theme/styledComponents';
import CustomerKit from '../../data/CustomerKit';
import { CustomerContext } from '../../contexts/CustomersContext'
import { useHistory } from "react-router-dom";

export default function CustomerDetailItem(props) {
    const { customerData, setCustomerData } = useContext(CustomerContext)
    const {name, organisationNr, vatNr, paymentTerm, website, email, phoneNumber} = props.data;
    const customerKit = new CustomerKit()
    const history = useHistory();
    
     const id = props.customerID
     console.log(id);

    async function handleDeleteCustomer() {

        const res = await customerKit.deleteOneCustomer(id)
        if(res.status === 204) {
          let customerDataCopy = { ...customerData }
    
          customerDataCopy.results = customerData.results.filter((item, index) => item.id !== id)
      
          console.log(customerDataCopy);
          setCustomerData(customerDataCopy)
          history.push('/customers')
        } else {
          console.log('failed to delete customer');
        }
    
      }


    return (
       <> <StyledDetailPage> 
           <DetailHeader>{name}</DetailHeader>
            <LabelContainer>

            <p>Organiastion number:</p> 
            <p>Vat-number: </p>
            <p>Payment Term: </p>
            <p>Website:   </p>
            <p>Email: </p>
            <p>Phone number: </p>
      
            </LabelContainer>
             
            <InfoContainer>
  
            <p>{organisationNr}</p>
            <p>{vatNr}</p>
            <p>{paymentTerm}</p>
            <p>{website}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
    
            </InfoContainer>
            <div></div>
            <StyledDeleteButton onClick={handleDeleteCustomer}>
            Delete
            </StyledDeleteButton>
            </StyledDetailPage> 
        </>
    )
}
