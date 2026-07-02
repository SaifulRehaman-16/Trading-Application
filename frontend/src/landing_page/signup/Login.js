import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        inputValue,
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (data.success) {
        toast.success(data.message, {
          position: "bottom-right",
        });

        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        toast.error(data.message, {
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);

      toast.error("Something went wrong", {
        position: "bottom-left",
      });
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_page">
      <div className="form_container">
        <h2>Login Account</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>

          <button type="submit">Login</button>

          <span>
            Don't have an account?{" "}
            <Link to="/signup">Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;