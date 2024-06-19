import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
     <i><b>  {props.alert.type}: </b></i>{props.alert.msg}
  </div>
  )
}
