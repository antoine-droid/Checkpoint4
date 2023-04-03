import React from 'react'
import styles from "../styles/Home.module.scss"


function Home() {
  return (
    <div className={styles["home-page"]}>
        <h1 className={styles["home-title"]}>Welcome to the Royal Kingdom of Colchis</h1>
       <h2  className={styles["home-about"]}> About the Kingdom :</h2>
        <br />
        <br />
       <p  className={styles["home-text"]}> As you step into the Kingdom of Colchis, 
        you'll be transported to a world unlike any other.
         A land of stunning natural beauty, rich history,
          and magical stories that have been passed down for generations.

        But what truly sets Colchis apart are its Royal Heroes. 
          These legendary figures have captured the hearts and 
          imaginations of people throughout the kingdom and beyond, 
          inspiring countless tales of bravery, loyalty, and honor.

       </p>
    </div>
    
    
  )
}

export default Home