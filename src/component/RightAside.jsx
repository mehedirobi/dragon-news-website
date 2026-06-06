import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightAside = () => {
    return (
        <div className="ml-5 sticky top-0 h-fit">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightAside;