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
                    <Link to="/"><button className='text-secondaryColor'>Home</button></Link>
                    <Link to="/products"><button className='text-secondaryColor'>Shop</button></Link>
                    <Link to="/about"><button className='text-secondaryColor'>About</button></Link>
                    <button>Blog</button>
                    <Link to="/contact"><button className="text-secondaryColor">Contact</button></Link>
                    <Link to="/team"><button className='text-secondaryColor'>Team</button></Link>
                </nav>
            </div>
            <div className='flex basis-2/5 mx-1'>
                <div className=' hidden  sm:hidden xl:flex lg:flex md:flex gap-3 '>
                    <button className='font-container text-[#45b3e7] text-md'><FontAwesomeIcon icon={faUser} /> Login / Register</button>
                    <button className='font-container text-[#45b3e7] text-md'><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                    <button className='font-container text-[#45b3e7] text-md'><FontAwesomeIcon icon={faCartShopping} /> </button>
                    <button className='font-container text-[#45b3e7] text-md'><FontAwesomeIcon icon={faHeart} /> </button>
                    {/* <button onClick={toggleMenuVisb}><FontAwesomeIcon icon={faBars} /></button> */}
                </div>
            </div>
        </div>
    </header>
    
);
}
