import React, { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenuVisb = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (

        <header className={` ${isMenuVisible ? 'h-[441px]' : ''} pt-4`} >
            <div>
          
            </div>
        <div className='flex '>
            <div className='flex basis-2/5'>
                <h3 className=' text-[24px] font-bold font- text-primarycolor leading-8'>Bandage</h3>
            </div>
            <div className=' basis-4/5 mx-1'>
                <nav className=' hidden sm:flex md:flex lg:flex xl:gap-4 sm:gap-2'>
                    <Link to="/"><button className='font-bold'>Home</button></Link>
                    <Link to="/products"><button className='font-bold'>Shop</button></Link>
                    <Link to="/about"><button className='font-bold'>About</button></Link>
                    <Link to="/pricing"><button className='font-bold'>Pricing</button></Link>
                    <Link to="/contact"><button className="font-bold">Contact</button></Link>
                    <Link to="/team"><button className='font-bold'>Team</button></Link>
                </nav>
            </div>
            <div className='flex basis-2/5 mx-1'>
                <div className=' hidden  sm:hidden xl:flex lg:flex md:flex gap-3 '>
                    <Link to='/login'><button className='font-bold text-[#23A6F0] text-md'><FontAwesomeIcon icon={faUser} /> Login </button></Link>
                    <a className=''>/</a>
                    <Link to='/signup'><button className='font-bold text-[#23A6F0] text-md'> Register </button></Link>
                    <button className='font-container text-[#23A6F0] text-md'><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                    <button className='font-container text-[#23A6F0] text-md'><FontAwesomeIcon icon={faCartShopping} /> </button>
                    <button className='font-container text-[#23A6F0] text-md'><FontAwesomeIcon icon={faHeart} /> </button>
                    <button className='text-[#23A6F0]' onClick={toggleMenuVisb}><FontAwesomeIcon icon={faBars} /></button>
                  
                
                </div>
            </div>
        </div>
    </header>
    
);
}
