import React from 'react'

export default function CustomerDetailItem(props) {
    const {name, organisationNr, vatNr, paymentTerm, website, email, phoneNumber} = props.data;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Organiastion number: {organisationNr}</p>
            <p>Vat-number: {vatNr}</p>
            <p>Payment Term: {paymentTerm}</p>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phoneNumber}</p>
        </div>
    )
}
