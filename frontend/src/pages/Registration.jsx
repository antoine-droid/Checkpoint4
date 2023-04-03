import React from 'react'
import { useRegistrationContext } from "../contexts/RegistrationContext";
import { toast } from "react-toastify";
import instanceAxios from "../services/instanceAxios";
import styles from "../styles/Registration.module.scss";
import Name from '../components/Name';
import Password from '../components/Password';
import Email from '../components/Email';

function Registration() {
const { email,
      setEmail,
      password,
      setPassword,
      name, 
      setName }= useRegistrationContext();

 const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      await instanceAxios.post(`/registration`, data, response);
      setResponse(data);
      navigate("/connexion");
      toast.success("Welcome Home");
    } catch (error) {
      console.error(error);
      toast.warning("please pay attention to the provided information");
    }
  };

  return (
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
          SIGN UP
        </button>
      </div>
      </div>
  )
}

export default Registration