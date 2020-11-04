import React, {useContext, useState, useEffect} from 'react'
import {CustomerContext} from '../contexts/CustomerContext';
import CustomerItem from '../components/Customer/CustomerDetailItem';

export default function CustomerDetailPage(props) {
    const {data} = useContext(CustomerContext);
    const [customerData, setCustomerData] = useState(null);
    console.log(data);

    const id = props.match.params.id;

    useEffect(() => {
        setCustomerData(data.customers[id])
    }, [])

    return (
        customerData && <CustomerItem data={customerData} />
    )
}
