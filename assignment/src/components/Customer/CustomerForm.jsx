import React from 'react'
import { StyledForm } from '../../theme/styledComponents'
import { StyledPrimaryButton } from '../../theme/styledComponents'

export default function CustomerForm(props) {
    return (
                <StyledForm>
                        <div className="createCustomerForm">
                            <ul className="flexOuter">
                                <li>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={props.setNameInput} 
                                        onChange={props.onChange}
                                        placeholder="Enter the full name"
                                    />
                                </li>
                                <li>
                                    <label htmlFor="organisationNr">Organisation number</label>
                                    <input 
                                        type="number"
                                        name="organisationNr"
                                        value={props.setOrganisationNr}
                                        onChange={props.onChange}
                                        placeholder="Enter the organisation number"
                                    />
                                </li>
                                <li>
                                    <label htmlFor="vatNr">VAT number</label>
                                    <input 
                                        type="text"
                                        name="vatNr"
                                        value={props.setVatNr}
                                        onChange={props.onChange}
                                        placeholder="Enter the VAT number"
                                    />
                                </li>
                                <li>
                                    <label htmlFor="reference">Reference</label>
                                    <input 
                                        type="text"
                                        name="reference"
                                        value={props.setReference}
                                        onChange={props.onChange}
                                        placeholder="Enter the reference"
                                    />
                                </li>
                                <li>
                                <label htmlFor="paymentTerm">Payment term</label>
                                    <input 
                                        type="number"
                                        name="paymentTerm"
                                        value={props.setPaymentTerm} 
                                        onChange={props.onChange}
                                        placeholder="Enter the payment term in numbers"
                                    />
                                </li>
                                <li>
                                <label htmlFor="website">Website</label>
                                    <input 
                                        type="text"
                                        name="website"
                                        value={props.setWebsite}
                                        onChange={props.onChange}
                                        placeholder="Enter website"
                                    />
                                </li>
                                <li>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    name="email"
                                    value={props.setEmail} 
                                    onChange={props.onChange}
                                    placeholder="Enter email"
                                />
                                </li>
                                <li>
                                    <label htmlFor="phoneNumber">Phone number</label>
                                    <input 
                                        type="number"
                                        name="phoneNumber"
                                        value={props.setPhoneNumber}
                                        onChange={props.onChange}
                                        placeholder="Enter phone number"
                                    />
                                </li>
                                <li>
                                    <StyledPrimaryButton onClick={props.handleCreateCustomer}>Create</StyledPrimaryButton>
                                    {props.formInfo}
                                </li>
                            </ul>
                        </div>
                </StyledForm>
    )
}
