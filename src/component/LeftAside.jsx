import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div className="mr-5">
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;