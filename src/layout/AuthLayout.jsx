import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Login from '../pages/Login';

const AuthLayout = () => {
    return (
        <div className="bg-base-200">
            <header className="w-11/12 mx-auto my-3">
                <Navbar></Navbar>
            </header>

            <main className="w-11/12 mx-auto my-3">
                <Outlet></Outlet>
                
            </main>
        </div>
    );
};

export default AuthLayout;