import { NavLink } from "react-router";
import userImg from '../assets/user.png';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center gap-5 text-accent font-semibold">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/careers'>Careers</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div className="login-btn flex items-center gap-3">
                <img className="w-10 rounded-full" src={userImg} alt="" />
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    );
};

export default Navbar;