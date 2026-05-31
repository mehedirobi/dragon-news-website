import React from 'react';
import logo from '../assets/logo.png'
import {format} from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 py-5'>
            <img className='w-[400px]' src={logo} alt="Logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'>{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>

        </div>
    );
};

export default Header;