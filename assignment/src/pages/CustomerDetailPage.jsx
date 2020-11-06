import React, {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {CustomerContext} from '../contexts/CustomersContext';
import CustomerDetailItem from '../components/Customer/CustomerDetailItem';
import CustomerEditDetails from '../components/Customer/CustomerEditDetails';
import { StyledPrimaryButton } from '../theme/testStyles';

export default function CustomerDetailPage(props) {
    
    const {customerData} = useContext(CustomerContext);
    const [customerDetailData, setCustomerDetailData] = useState(null);
    const [editUser, setEditUser] = useState(false)

    const id = props.match.params.id;
    let history = useHistory();

    function checkCustomerData() {
        if(customerData) {
            const customerIndex = customerData.results.filter((customer) => customer.id == id)
            setCustomerDetailData(customerIndex[0])
            
        } else {
            history.push('/customers');
        }
    }

    function handleOnClickEditCustomer () {
        checkCustomerData(); 
        setEditUser(!editUser)
    }

    useEffect(() => {
        checkCustomerData()
    }, [])

    return (
        <>
            {customerDetailData && (
                <>
                    
                    <StyledPrimaryButton onClick={handleOnClickEditCustomer}>{editUser === false ? 'Edit' : 'Exit'}</StyledPrimaryButton>
                    {editUser && <CustomerEditDetails customerID={id} data={customerDetailData}/>} 
                    {!editUser && <CustomerDetailItem data={customerDetailData}/>} 
                </>
            )}
        </>
    )
}
