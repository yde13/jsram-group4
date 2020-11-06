import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
export default function Redirect() {
  let history = useHistory()
  
  useEffect(() => {
    history.push('/')
  }, [])
  return (
    <div>
      
    </div>
  )
}
