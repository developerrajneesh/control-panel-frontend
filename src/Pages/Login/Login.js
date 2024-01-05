import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const tokendata = localStorage.getItem("tokenData");
    console.log(tokendata);
    if (tokendata) {
      navigate("/");
    }
  }, [pathname]);
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/admin/login`,
        {
          email: email,
          password: password,
        }
      );
      // Handle successful login response here
      if (response.data.token) {
        localStorage.setItem("tokenData", response.data.token);
        localStorage.setItem("name", response.data.name);
        navigate("/");
        console.log("Login successful", response.data);
      }
    } catch (error) {
      // Handle login error here
      console.error("Login failed", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f5f7f6", minHeight: "100vh" }}
    >
      <div
        className="shadow"
        style={{
          minHeight: "80vh",
          backgroundColor: "white",
          maxWidth: "400px",
        }}
      >
        <h4 className="text-center my-5">Login to Control Panel</h4>

        <div className="p-4">
          <TextField
            fullWidth
            label="Email"
            type="email"
            className="px-2 my-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            className="px-2 my-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-center align-items-center">
            <Button className="my-5" variant="outlined" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
