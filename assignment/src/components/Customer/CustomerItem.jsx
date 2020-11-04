import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerItem(props) {
  
  return (
    <div>
      <p>Name: {props.data.name}</p>
      <p>Email: {props.data.email}</p>
      <p>Phone number: {props.data.phoneNumber}</p>
       <Link to={`customers/${props.data.id}`}><p>More Info</p></Link> 
    </div>
  )
}
