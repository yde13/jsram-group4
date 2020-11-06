import React, { useState, useContext, useEffect } from 'react'
import CustomerForm from '../components/Customer/CustomerForm';
import { CustomerContext } from '../contexts/CustomersContext'
import CustomerKit from '../data/CustomerKit';
import CustomerItem from '../components/Customer/CustomerItem';

export default function CustomersPage() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
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
        customerKit.fetchAll()
            .then(res => res.json())
            .then(customers => {
                setCustomerData(customers)
            })
    }

    function handleCreateCustomer() {
        const payload = formData;
        const customerkit = new CustomerKit;
        customerkit.createCustomer(payload)
        .then(res => res.json())
        .then(data => {
            let customerDataCopy = {...customerData}
            customerDataCopy.results.unshift(data);
            console.log("Copy: ", customerDataCopy)
            setCustomerData(customerDataCopy);
            console.log("CustomerData: ", customerData && customerData)
        })
    }

    function handleInputOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    useEffect(() => {
        fetchAllCustomers()
    }, [])

    return (
        <div>
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
            />
            {customerData && Object.entries(customerData.results).map((customer, index) => {

                return <CustomerItem key={index} data={customer} value={customer[1].id} />

            })}
        </div>

    )
}
