import React from 'react'
import { LabelContainer, InfoContainer, StyledDetailPage, DetailHeader } from '../../theme/testStyles';

export default function CustomerDetailItem(props) {

    const {name, organisationNr, vatNr, paymentTerm, website, email, phoneNumber} = props.data;

    return (
       <>   <StyledDetailPage> 
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
            </StyledDetailPage> 
        </>
    )
}
