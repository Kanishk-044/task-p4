import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 bg-gray-100 px-6 py-4 shadow-sm">

      <Link
        to="/"
        className="whitespace-nowrap text-xl font-bold text-black"
      >
        DEV@Deakin
      </Link>

      <input
        type="text"
        placeholder="Search..."
        className="w-full border rounded px-3 py-2"
      />

      <div className="flex items-center">
        <Link
          to="/login"
          className="whitespace-nowrap text-gray-700 hover:text-blue-600"
        >
          Login
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;