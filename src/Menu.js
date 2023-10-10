import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
      <center>
        <h1>QUIZ</h1>
        <Link className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="html">HTML</Link>&nbsp;&nbsp;&nbsp;
        <Link className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="css">CSS</Link>&nbsp;&nbsp;&nbsp;
        <Link className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="bootstrap">BOOTSTRAP </Link>&nbsp;&nbsp;&nbsp; 
        <Link className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="javascript">JAVASCRIPT </Link> 
        
       
        </center>
    </div>
  )
}

export default Menu