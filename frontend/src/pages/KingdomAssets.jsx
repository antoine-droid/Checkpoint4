import React,{ useState, useEffect } from 'react';
import styles from "../styles/Kingdom.module.scss";
import instanceAxios from "../services/instanceAxios";

function KingdomAssets() {
    const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function handleAssets() {
      try {
        const response = await instanceAxios.get("/assets");
        setAssets(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    handleAssets();
  }, []);

  return (
    <div className={styles["kingdom-assets-page"]}> 
      <h1 className={styles["kingdom-title"]}> The Royal Kingdom Assets</h1>
       <div className={styles["kingdom-assets-container"]}>
      {assets.map((assets) => (
        <div className={styles["kingdom-asset-key"]} key={assets.id}>
          <p className={styles["kingdom-p-1"]}> {assets.name}</p>
          <p className={styles["kingdom-p-3"]}> Total quantity: {assets.quantity}</p>
          <p className={styles["kingdom-p-2"]}> Unit worth :{assets.unit_worth} $</p>
          <p className={styles["kingdom-p-2"]}> Total worth :{assets.total_worth} $</p>
          
          <img className={styles["kingdom-asset-img"]} src={assets.image} alt={assets.name} />
        </div>
      ))}
    </div>
      </div>
  )
}

export default KingdomAssets;