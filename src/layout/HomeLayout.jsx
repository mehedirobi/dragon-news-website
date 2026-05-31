import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
        <Header></Header>
            </header>
        <main>
            <section className="left">
                
        <Outlet></Outlet>

            </section>
            <section className="right">

            </section>
        </main>
        </div>

    );
};

export default HomeLayout;