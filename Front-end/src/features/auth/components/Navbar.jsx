import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, handleLogout } = useAuth(); // Assuming handleLogout exists in your provider
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      if (handleLogout) {
        await handleLogout();
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        MyProject
      </Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        
        {user ? (
          <>
            <span>Welcome, {user.email || "User"}</span>
            <button onClick={onLogout} className="button secondary-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="button primary-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
