import React from 'react';
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import { useRegistrationContext } from "../contexts/RegistrationContext";
import instanceAxios from "../services/instanceAxios";
import Email from "../components/Email";
import Password from "../components/Password";
import styles from "../styles/Registration.module.scss";

function Connexion() {
   const [response, setResponse] = useState("");
   const { email, setEmail, password, setPassword, setIsLoggedIn } =
    useRegistrationContext();

   const navigate = useNavigate();


   const data = { email, password };



  const handleConnexion = async (event) => {
    event.preventDefault();
    if (email && password)
      try {
        const res = await instanceAxios.post(`/login`, data);
        const user = { ...res.data, roles: res.data.roles };
        setResponse(data.user);
        localStorage.setItem("user", JSON.stringify(user));
        if (user.roles === "admin") {
          setIsLoggedIn(true);
          navigate("/admin");
        }
        if (user.roles === "user") {
          setIsLoggedIn(true);
          navigate("/profile");
        }
        window.location.reload();
        toast.success("✨ Welcome ✨");
      } catch (error) {
        console.error(error);
        toast.warning("Please go to registration");
      }
  };


  return (
    <div className={styles["registration-page-container"]}>
      <div className={styles["registration-page"]}>
        <h1 className={styles["registration-title"]}>CONNEXION</h1>
        <form className={styles["registration-forms"]} onSubmit={handleConnexion }>
          <Email email={email} setEmail={setEmail} />
          <Password password={password} setPassword={setPassword} />
        </form>
          <label htmlFor="my-button"> </label>
          <button href="/" 
            className={styles["registration-btn"]}
            type="button"
            onClick={handleConnexion}
          >
            CONNEXION
          </button>
        </div>
        
      </div>
  );
}

export default Connexion