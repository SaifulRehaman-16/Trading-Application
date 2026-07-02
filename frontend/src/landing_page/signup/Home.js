import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        if (!cookies.token) {
          navigate("/login");
          return;
        }

        const { data } = await axios.post(
          `${API}/`,
          {},
          {
            withCredentials: true,
          }
        );

        const { status, user, message } = data;

        if (status) {
          setUsername(user);

          toast.success(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          toast.error(message || "Authentication failed");
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = async () => {
    try {
      await axios.post(
        `${API}/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      removeCookie("token");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>

        <button onClick={Logout}>LOGOUT</button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;