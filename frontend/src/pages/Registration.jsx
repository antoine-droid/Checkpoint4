import React from 'react'

function Registration() {
  return (
    <div className={styles["registration-page"]}>  
        <h1 className={styles["registration-title"]}>Registration</h1>
        <form className={styles["registration-forms"]} onSubmit={handleSignUp}>
          <FirstName setFirstName={setFirstName} firstName={firstName} />
          <Email setEmail={setEmail} email={email} />
          <Password setPassword={setPassword} password={password} />
        </form>
        </div>
  )
}

export default Registration