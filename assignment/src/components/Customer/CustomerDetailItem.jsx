import React from 'react'

export default function CustomerItem(props) {
    return (
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.organisationNr}</p>
            <p>{props.data.vatNr}</p>
            <p>{props.data.paymentTerm}</p>
            <p>{props.data.website}</p>
            <p>{props.data.email}</p>
            <p>{props.data.phoneNumber}</p>
        </div>
    )
}
