import React from 'react'

import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav style = {{textAlign: 'center', textDecoration: 'none'}}>
            <Link to = '/' >Home</Link>
            <Link to = '/about' >About</Link>
            <Link to = '/services' >Services</Link>
        </nav>
    )
}

export default Navbar