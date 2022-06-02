import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            
            <div onClick={()=> setOpen(!open)} className='w-8 h-8 md:hidden'>
              {open ? <XIcon />  : <MenuIcon />}
            </div>


            <ul className={`text-center bg-transparent mb-10 mt-0 pt-0 text-white relative duration-200 ease-in w-full font-serif text-2xl md:flex justify-center ${open ? " top-8" : "top-[-180px]"}  `}>
                <CustomLink className='mr-5' to='/'> Home </CustomLink>
                <CustomLink className='mr-5' to='/meals'> Meals </CustomLink>
                <CustomLink className='mr-5' to="/about"> About </CustomLink> 
            </ul>
            
        </div>
    );
};

export default Header;