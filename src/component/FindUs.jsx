import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Find Us On</h2>

      <div className="rounded-lg border border-base-300 overflow-hidden">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 hover:bg-base-200 transition-colors border-b border-base-300"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <FaFacebookF className="text-blue-600" />
          </div>

          <span className="font-medium">Facebook</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 hover:bg-base-200 transition-colors border-b border-base-300"
        >
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
            <FaInstagram className="text-pink-600" />
          </div>

          <span className="font-medium">Instagram</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 hover:bg-base-200 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
            <FaTwitter className="text-sky-500" />
          </div>

          <span className="font-medium">Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;