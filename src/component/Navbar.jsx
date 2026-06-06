import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="w-24"></div>

        {/* Center Navigation */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <img
            src={userImg}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <Link to="/login" className="btn btn-primary px-6">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;