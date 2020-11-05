import React, {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {CustomerContext} from '../contexts/CustomersContext';
import CustomerDetailItem from '../components/Customer/CustomerDetailItem';

export default function CustomerDetailPage(props) {
    
    const {customerData} = useContext(CustomerContext);
    const [customerDetailData, setCustomerDetailData] = useState(null);
    

    const id = props.match.params.id;
    let history = useHistory();

    console.log(customerData);

    useEffect(() => {
            if(customerData.results) {
                const customerIndex = customerData.results.filter((customer) => customer.id == id)
                setCustomerDetailData(customerIndex[0])
            } else {
                history.push('/customers');
            }

    }, [])

    return (
  
        customerDetailData && <CustomerDetailItem data={customerDetailData} />
    )
}
