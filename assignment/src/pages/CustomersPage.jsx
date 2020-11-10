import React, { useState, useContext, useEffect } from 'react'
import CustomerForm from '../components/Customer/CustomerForm';
import { CustomerContext } from '../contexts/CustomersContext'
import CustomerKit from '../data/CustomerKit';
import CustomerItem from '../components/Customer/CustomerItem';
import { StyledList, StyledMainContentContainer } from '../theme/styledComponents';


export default function CustomersPage() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const [formInfo, setFormInfo] = useState('')
    const { customerData, setCustomerData } = useContext(CustomerContext)
    const customerKit = new CustomerKit();

    const [formData, setFormData] = useState({
        name: "",
        organisationNr: "",
        vatNr: "",
        reference: "",
        paymentTerm: "",
        website: "",
        email: "",
        phoneNumber: ""
    })

    function fetchAllCustomers() {
        if(!customerData) {
            customerKit.fetchAll()
            .then(res => res.json())
            .then(customers => {
                setCustomerData(customers)
            })
        }

    }

    function handleCreateCustomer() {
        const payload = formData;
        const customerkit = new CustomerKit();
        let check = customerKit.checkVATNRValidation(payload['vatNr'])
        if(check) {
            customerkit.createCustomer(payload)
            .then(res => res.json())
            .then(data => {
                if (data.hasOwnProperty('id')) {
                    let customerDataCopy = { ...customerData }
                    customerDataCopy.results.push(data);
                    setCustomerData(customerDataCopy);
                } else {
                    console.log('Something went wrong in the request');
                }
            })
        } else {
            setFormInfo('Incorrect vatNr format')
        }
    }

    function handleInputOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        fetchAllCustomers()
    }, [])

    return (
        <StyledMainContentContainer>
            <h1>Customers page</h1>

            <CustomerForm
                onChange={handleInputOnChange}
                setNameInput={formData["name"]}
                setOrganisationNr={formData["organisationNr"]}
                setVatNr={formData["vatNr"]}
                setReference={formData["reference"]}
                setPaymentTerm={formData["paymentTerm"]}
                setWebsite={formData["website"]}
                setEmail={formData["email"]}
                setPhoneNumber={formData["phoneNumber"]}
                handleCreateCustomer={handleCreateCustomer}
                formInfo={formInfo}
            />
            <StyledList>

                {customerData && Object.entries(customerData.results).reverse().map((customer, index) => {

                    return (
                        <CustomerItem key={index} data={customer} id={customer[1].id} />
                    )

                })}
            </StyledList>

        </StyledMainContentContainer>

    )
}
