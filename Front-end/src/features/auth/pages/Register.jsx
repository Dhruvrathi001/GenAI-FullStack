// import "./auth.form.scss"
import { useNavigate, Link } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
    const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {loading, handleRegister} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({username, email, password})
    navigate("/")
  }

  useEffect(() =>{
    if(loading){
      const timer = setTimeout(() =>{
        alert("Registration failed. Please check your input and try again.");
        window.location.reload();
      }, 5000)
      return () => clearTimeout(timer);
    }
  }, [loading])

  if(loading) {
    return (
      <main><h1>loading...</h1></main>
    )}

  return (
    <main>
      <h1>Register</h1>
      <div className="container">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              className="input-field"
              type="username"
              name="username"
              id="username"
              placeholder="Create your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              className="input-field"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              className="input-field"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="input-field"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            // onClick={navigate("/login")}
            type="submit"
            className="button primary-button"
          >
            Register
          </button>
        </form>
      </div>
      <p>
        Already have an account? <Link to={"/login"}>Login here</Link>
      </p>
    </main>
  );
};

export default Register;
