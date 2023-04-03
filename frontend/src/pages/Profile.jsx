import React, { useEffect} from 'react';
import instanceAxios from "../services/instanceAxios";
import { useRegistrationContext } from "../contexts/RegistrationContext";
import styles from "../styles/Profile.module.scss";

function Profile() {
  const {  email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      name, 
      setName,
      isLoggedIn, 
      setIsLoggedIn} = useRegistrationContext();


    useEffect(() => {
    instanceAxios
      .get(`/login/profile`,{ user , email })
       .then((response) => {
        const userData = response.data;
        setName(userData.username);
     
        setEmail(userData.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


   const handleDisconnection = () => {
    instanceAxios
      .get("/logout")
      .then(() => {
        localStorage.clear();
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

 
 return (
  <div>
      <h1>Welcome  ✨{user.username}✨ </h1>
      <h1>Welcome  ✨{user.email}✨ </h1>
      <button onClick={handleDisconnection}>
        Disconnect
      </button>
    </div>
  )
}

export default Profile