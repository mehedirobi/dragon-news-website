import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">
        Login with
      </h2>

      <button
        type="button"
        className="btn btn-outline btn-secondary w-full h-12 font-semibold"
      >
        <FaGoogle size={18} />
        Login with Google
      </button>

      <button
        type="button"
        className="btn btn-outline btn-primary w-full h-12 font-semibold"
      >
        <FaGithub size={18} />
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;