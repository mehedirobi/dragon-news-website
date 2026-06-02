import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftAside from '../component/LeftAside';
import RightAside from '../component/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
            <LatestNews></LatestNews>
        </section>
        <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
        </nav>
            </header>
        <main>
            <aside>
                <LeftAside></LeftAside>
            </aside>
            <section className="left">
                
        <Outlet></Outlet>

            </section>
            <aside>
                <RightAside></RightAside>
            </aside>
        </main>
        </div>

    );
};

export default HomeLayout;