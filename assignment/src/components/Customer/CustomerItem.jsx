import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerItem(props) {
  
  return (
    <div>
      <p>Name: {props.data[1].name}</p>
      <p>Email: {props.data[1].email}</p>
      <p>Phone number: {props.data[1].phoneNumber}</p>
      {/* <Link link="/customers"><p>More Info</p></Link> */}
    </div>
  )
}
