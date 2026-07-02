import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const API = process.env.REACT_APP_API_URL;
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
       const { data } = await axios.post(
  `${API}/`,
  {},
  {
    withCredentials: true,
  }
);

        console.log("Dashboard Verification:", data);

        const { status, user, message } = data;

        if (status) {
          setUsername(user);

          toast.success(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          toast.error(message || "Authentication failed", {
            position: "bottom-left",
          });

          setTimeout(() => {
            window.location.href = `${FRONTEND_URL}/login`;
          }, 1500);
        }
      } catch (err) {
        toast.error("Please login to continue", {
          position: "bottom-left",
        });

        setTimeout(() => {
          window.location.href = `${FRONTEND_URL}/login`;
        }, 1500);
      }
    };

    verifyUser();
  }, []);

  return (
    <>
      <TopBar username={username} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;