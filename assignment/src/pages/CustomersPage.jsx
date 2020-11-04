import React, { useContext, useEffect } from 'react'
import { CustomerContext } from '../contexts/CustomersContext'
import CustomerKit from '../data/CustomerKit';
import CustomerItem from '../components/Customer/CustomerItem';


export default function CustomersPage() {

    const { customerData, setCustomerData } = useContext(CustomerContext)
    const customerKit = new CustomerKit();

    function fetch() {
        customerKit.fetchAll()
            .then(res => res.json())
            .then(customers => {
                setCustomerData(customers.results)
            })
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <div>
            <h1>Customers page</h1>
            {customerData && customerData.map((customer, index) => {

               return <CustomerItem key={index} data={customer}/>
                
            })}
        </div>
    )
}
