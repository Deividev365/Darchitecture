import React from 'react'
import logo from '../assets/logo.png'


const Logo = () => {
    return(
        <div className="text-black">
            <img className="w-16 mx-40 sm:mx-20 " src={logo} alt="logo-icon"></img>
        </div> 
    )
}

export default Logo;
