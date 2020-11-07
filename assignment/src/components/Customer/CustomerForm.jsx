import React from 'react'

export default function CustomerForm(props) {
    return (
                <div className="">
                    <h3>Skapa ny kund</h3>
                    <form>
                        <input 
                            type="text"
                            name="name"
                            value={props.setNameInput} 
                            onChange={props.onChange}
                            placeholder="Name"
                        />
                        <input 
                            type="text"
                            name="organisationNr"
                            value={props.setOrganisationNr}
                            onChange={props.onChange}
                            placeholder="Organisationsnummer"
                        />
                        <input 
                            type="number"
                            name="vatNr"
                            value={props.setVatNr}
                            onChange={props.onChange}
                            placeholder="Moms"
                        />
                        <input 
                            type="text"
                            name="reference"
                            value={props.setReference}
                            onChange={props.onChange}
                            placeholder="Referens"
                        />
                        <input 
                            type="number"
                            name="paymentTerm"
                            value={props.setPaymentTerm} 
                            onChange={props.onChange}
                            placeholder="Betalningsvilkor i dagar"
                        />
                        <input 
                            type="text"
                            name="website"
                            value={props.setWebsite}
                            onChange={props.onChange}
                            placeholder="Hemsida"
                        />
                        <input 
                            type="text"
                            name="email"
                            value={props.setEmail} 
                            onChange={props.onChange}
                            placeholder="Email"
                        />
                        <input 
                            type="number"
                            name="phoneNumber"
                            value={props.setPhoneNumber}
                            onChange={props.onChange}
                            placeholder="Telefonnummer"
                        />
                    </form>
                    <button onClick={props.handleCreateCustomer}>Create</button>
                </div>
    )
}
