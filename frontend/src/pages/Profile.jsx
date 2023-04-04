import React, { useState, useEffect} from 'react';
import instanceAxios from "../services/instanceAxios";
import { useRegistrationContext } from "../contexts/RegistrationContext";
import { toast } from "react-toastify";
import styles from "../styles/Profile.module.scss";
import { useNavigate} from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  
  const [isFormSubmitted, SetIsFormSubmitted]=useState(false);


  const { newEmail , setNewEmail ,newName , setNewName, email,
      setEmail,
      user,
      setUser,
      setName,
      id, setId
      } = useRegistrationContext();


    useEffect(() => {
    instanceAxios
      .get(`/login/profile`,{ user , email , id })
       .then((response) => {
        const userData = response.data;
        setName(userData.username);
        setEmail(userData.email);
        setId(userData.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


const handleFormSubmit = (event) => {
  event.preventDefault();
  instanceAxios
    .put(`/login/profile/${user.id}`, { newName, newEmail, user })
    .then((response) => {
   const userData = response.data;
      setName(userData.name); 
      setEmail(userData.email); 
      SetIsFormSubmitted(true);
      setNewName(userData.newName);
      setNewEmail(userData.newEmail);
      localStorage.setItem("user", JSON.stringify({name: userData.newName, email: userData.newEmail})); 
      toast.success("✨ name & email changed✨");
    })
    .catch((error) => {
      console.error(error);
    });
};

   const handleDisconnection = () => {
    instanceAxios
      .get("/logout")
      .then(() => {
        localStorage.clear();
        setUser("");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

    const handleDelete = () => {
    instanceAxios
      .delete(`/login/profile/${user.id}`)
      .then(() => {
        localStorage.clear();
        setUser("");
        navigate("/");
        toast.success("✨ account deleted goodbye ✨");
      })
      .catch((err) => console.error(err));
  };


 
 return (
  <div className={styles["profil-page-container"]}>
  <div className={styles["profil-page"]}>
<>
 <h1 className={styles["profil-title"]}>Hello ✨{isFormSubmitted ? newName : user.username}✨</h1>
<h1 className={styles["profil-title"]}>✨{isFormSubmitted ? newEmail : user.email}✨</h1>
</>

      <div className={styles["profil-form-group"]}>
 <form className={styles["profil-form"]} onSubmit={handleFormSubmit}>
        <label>
          
          <input className={styles["profil-input"]}  id="name"
        name="name"
        type="text"
        placeholder="Change your name:"
         value={newName || ''} onChange={(e) => setNewName(e.target.value)} />
        </label>
        <label>
          
          <input className={styles["profil-input"]} type="text" placeholder="Change your email:" value={newEmail || ''} onChange={(e) => setNewEmail(e.target.value)} />
        </label>
        <button className={styles["profil-button-submit"]}  type="submit">Save changes</button>
      </form>
      <button className={styles["profil-button-disconnect"]}  onClick={handleDisconnection}>
        Disconnect
      </button></div>
      <button className={styles["profil-button-delete"]} onClick={handleDelete}  >Delete Account</button>
    </div></div>
  )
}

export default Profile