import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { StyledItem, StyledPrimaryButton } from '../../theme/styledComponents';

export default function CustomerItem(props) {

  const StyledViewButton = styled(StyledPrimaryButton)`
  width: 100%;
    a {
      text-decoration: none;
        &:hover {
        color: white;
      }
    }
  `

  return (
    <StyledItem>
      <p>Name: {props.data[1].name}</p>
      <p>Email: {props.data[1].email}</p>
      <p>Phone: {props.data[1].phoneNumber}</p>
      <Link to={`customers/${props.data[1].id}`}><StyledViewButton>More Info</StyledViewButton></Link>
    </StyledItem>
  )
}
