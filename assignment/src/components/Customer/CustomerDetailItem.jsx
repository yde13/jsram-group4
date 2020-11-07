import React from 'react'
import { StyledItem } from '../../theme/testStyles';

export default function CustomerDetailItem(props) {

    const {name, organisationNr, vatNr, paymentTerm, website, email, phoneNumber} = props.data;

    return (
        <StyledItem>
       
            <p>Name: {name}</p>
            <p>Organiastion number: {organisationNr}</p>
            <p>Vat-number: {vatNr}</p>
            <p>Payment Term: {paymentTerm}</p>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phoneNumber}</p>
        </StyledItem>
    )
}
