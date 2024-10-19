import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-center m-4 gap-5'>
      <p className='fs-3 text-success'><Link to={"/"}>Home</Link></p>
      <p className='fs-3 text-success'><Link to={"about"}>About</Link></p>
      <p className='fs-3 text-success'><Link to={"services"}>Services</Link></p>
      <p className='fs-3 text-success'><Link to={"products"}>Products</Link></p>
    </div>
  )
}

export default Navbar