import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <div className='footer'>
        <Navbar searchHide={true}/>
        <Header/>
    </div>
  )
}

export default Footer