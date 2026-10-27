import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); setLoading(false); });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Unable to log out. Please try again.");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        DEV@Deakin
      </Link>

      <div className="nav-search">
        <input
          type="search"
          aria-label="Search"
          placeholder="Search articles and tutorials..."
        />
      </div>

      <div className="nav-links">
        <a href="/#about">About</a>
        <a href="/#work">Work</a>
        <a href="/#contact">Contact</a>

        {!loading && (
          <>
            {user ? (
              <button
                type="button"
                className="nav-action"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="nav-action">
                  Login
                </Link>

                <Link to="/register" className="nav-action">
                  Register
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
