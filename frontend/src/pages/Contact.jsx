import React, { useState } from 'react';
import { toast } from "react-toastify";
import styles from "../styles/Contact.module.scss";
import { useNavigate} from "react-router-dom";

function Contact() {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("✨Your message has been received. Thank you for participating in our improvement✨");
    console.log(formData);
   navigate("/");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className={styles["form-page-container"]}>
      <h1 className={styles["form-page-title"]}>Need To Contact The Kingdom ?</h1>
      <form className={styles["form-page-form"]} onSubmit={handleSubmit}>
        <label className={styles["form-page-label"]}  htmlFor="name"> </label>
        <input className={styles["form-page-input"]}type="text" placeholder="Your name" id="name" name="name" required value={formData.name} onChange={handleChange}/>
        
        <label className={styles["form-page-label"]} htmlFor="email"> </label>
        <input className={styles["form-page-input"]} type="email" placeholder="Your email" id="email" name="email" required value={formData.email} onChange={handleChange}/>
        
        <label className={styles["form-page-label"]}htmlFor="subject"> </label>
        <input className={styles["form-page-input"]}  type="text" placeholder="Subject" id="subject" name="subject" required value={formData.subject} onChange={handleChange}/>
        
        <label className={styles["form-page-label"]} htmlFor="message"> </label>
        <textarea className={styles["form-page-textarea"]} id="message" placeholder="Your message" name="message" required value={formData.message} onChange={handleChange}></textarea>
        
        <button className={styles["form-page-button"]} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;