import React from "react"

const Footer = (props) => { 
    const {company, email} = props
   return (
     <div>Power By | {company} Contact By | {email}</div>)
   }

export default Footer