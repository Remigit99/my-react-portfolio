import React from 'react';
import { TiHome } from 'react-icons/ti';
import { IoIosContact } from 'react-icons/io';
import { ImQuotesLeft } from 'react-icons/im';
import { AiFillContacts } from 'react-icons/ai';

import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul className="nav__links">
                <li title='Home'>
                    <TiHome className='nav__icons' />
                </li>
                <li title='About'>
                    <IoIosContact className='nav__icons' />
                </li>
                <li title='Testimonials'>
                    <ImQuotesLeft className='nav__icons' />
                </li>
                <li title='Contact'>
                    <AiFillContacts className='nav__icons' />
                </li>
            </ul>
        </nav>
    )
}

export default Nav;