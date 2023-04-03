import React, { useState } from "react";

import styles from "../styles/Registration.module.scss";

function validateName(name) {
  const regex = /^[a-zA-Z]{3,30}$/;
  return regex.test(name);
}



function Name({ setName, name }) {
  const [isValidName, setIsValidName] = useState(true);

const handleChangeName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    if (!validateName(inputValue)) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  return (
    <div className={styles["registration-form-group"]}>
      <label htmlFor="name"> </label>
      <input
        className={styles["registration-input"]}
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        value={name || ""}
        onChange={handleChangeName}
        onTouchStart={(e) => {
          e.preventDefault();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
        }}
        onWheel={(e) => {
          e.preventDefault();
        }}
        onScroll={(e) => {
          e.preventDefault();
        }}
      />
      {!isValidName && (
        <span className={styles["registration-span"]}>
          Your name lenght must be at least 3 caracter
        </span>
      )}
    </div>
  );
}

export default Name;