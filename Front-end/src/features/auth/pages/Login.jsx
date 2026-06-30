import "../auth.form.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ email, password });
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // useEffect(() =>{
  //   if(loading){
  //     const timer = setTimeout(() =>{
  //       alert("Login failed. Please check your credentials and try again.");
  //       window.location.reload();
  //     }, 2000)
  //     return () => clearTimeout(timer);
  //   }
  // }, [loading])

  if(loading) {
    return (
      <main><h1>loading...</h1></main>
    )}

  return (
    <main>
      <h1>login</h1>
      <div className="container">
        <form action="" method="post" onSubmit={handleSubmit}>
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

          <button type="submit" className="button primary-button">
            Login
          </button>
        </form>
      </div>
      <p>
        Don't have an account? <Link to={"/register"}>Register here</Link>
      </p>
    </main>
  );
};

export default Login;
