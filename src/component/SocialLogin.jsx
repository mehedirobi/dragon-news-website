import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="space-y-3">
            <p className="font-bold">Login with</p>
            <button className="btn btn-secondary hover:text-white btn-outline w-full  text-accent font-semibold"><FaGoogle /> Login with Google</button>

            <button className="btn btn-primary hover:text-white btn-outline w-full  text-accent font-semibold"><FaGithub /> Login with Github</button>
        </div>
    );
};

export default SocialLogin;