import React, { useState } from 'react'
import { useRegistrationContext } from "../contexts/RegistrationContext";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import instanceAxios from "../services/instanceAxios";
import styles from "../styles/Registration.module.scss";
import Name from '../components/Name';
import Password from '../components/Password';
import Email from '../components/Email';

function Registration() {
    const[response, setResponse]=  useState(null);
    const navigate = useNavigate();
    
const { email,
      setEmail,
      password,
      setPassword,
      name, 
      setName }= useRegistrationContext();

      const data = {email,
      setEmail,
      password,
      setPassword,
      name, 
      setName}

 const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      await instanceAxios.post(`/registration`, data, response);
      setResponse(data);
      navigate("/connexion");
      toast.success("You are registered");
    } catch (error) {
      console.error(error);
      toast.warning("please pay attention to the provided information");
    }
  };

  return (
    <div className={styles["registration-page-container"]}> 
    <div className={styles["registration-page"]}>
        <h1 className={styles["registration-title"]}>Registration</h1>
        <form className={styles["registration-forms"]} onSubmit={handleRegistration}>
          <Name setName={setName} name={name} />
          <Email setEmail={setEmail} email={email} />
          <Password setPassword={setPassword} password={password} />
        </form>
        <div>
          <button
          className={styles["registration-btn"]}
          type="button"
          onClick={handleRegistration}
        >
          REGISTER
        </button>
        </div>
      </div>
      </div>
  )
}

export default Registration