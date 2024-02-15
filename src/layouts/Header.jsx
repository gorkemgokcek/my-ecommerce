import React, { useState } from 'react';

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
        <div className='flex '>
            <div className='flex basis-2/5'>
                <h3 className=' text-[24px] font-bold font- text-[#252B42] leading-8'>Bandage</h3>
            </div>
            <div className=' basis-4/5 mx-1'>
                <nav className=' hidden sm:flex md:flex lg:flex xl:gap-4 sm:gap-2'>
                    <button>Home</button>
                    <button>Shop</button>
                    <button>About</button>
                    <button>Blog</button>
                    <button>Contact</button>
                    <button>Team</button>
                </nav>
            </div>
            <div className='flex basis-2/5 mx-1'>
                <div className=' hidden  sm:flex xl:flex lg:flex md:flex gap-3 '>
                    <button className='font-container  text-primaryColor text-md'><FontAwesomeIcon icon={faUser} /> Login / Register</button>
                    <button className='font-container text-primaryColor text-md'><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                    <button className='font-container text-primaryColor text-md'><FontAwesomeIcon icon={faCartShopping} /> </button>
                    <button className='font-container text-primaryColor text-md'><FontAwesomeIcon icon={faHeart} /> </button>
                    <button onClick={toggleMenuVisb}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>
        </div>

    </header>
);
}
