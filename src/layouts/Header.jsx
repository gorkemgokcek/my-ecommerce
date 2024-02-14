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
        <header>
            <div className='flex'>
                <div className='flex'>
                    <h3 className='font-bold'>GG Store</h3>
                </div>
                <div className='sm:flex md:flex lg:flex'>
                    <nav className=''>
                    <button>Home</button>
                    <button>Shop</button>
                    <button>About</button>
                    <button>Blog</button>
                    <button>Contact</button>
                    <button>Pages</button>
                    </nav>
                </div>
                <div className='flex'>
                    <div>
                    <button className='font-container  text-primaryColor text-sm '><FontAwesomeIcon icon={faUser} /> Login / Register</button>
                        <button className='font-container text-primaryColor text-sm'><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                        <button className='font-container text-primaryColor text-sm'><FontAwesomeIcon icon={faCartShopping} /> 0</button>
                        <button className='font-container text-primaryColor text-sm'><FontAwesomeIcon icon={faHeart} /> 0</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                <h3 className=' font-container xl:mx-[136px] lg:mx-[40px] md:mx-[20px] mx-[5px] text-[24px] font-bold font- text-[#252B42] leading-8 pb-2'></h3>
                </div>
                <div>
                    <div>
                    <button className='font-container text-secondaryColor text-sm'><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                        <button className='font-container text-secondaryColor text-sm '><FontAwesomeIcon icon={faCartShopping} /> </button>
                        <button onClick={toggleMenuVisb} className="text-secondaryColor" ><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                </div>
            </div>
        </header>
    );
}
