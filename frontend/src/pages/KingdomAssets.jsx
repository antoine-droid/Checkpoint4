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
    <div> 
      <h1 className={styles["kingdom-title"]}>Kingdom Assets</h1>
       <div>
      {assets.map((asset) => (
        <div key={asset.id}>
          <p>Name: {asset.name}</p>
          <p>Worth: {asset.worth}</p>
          <p>Quantity: {asset.quantity}</p>
          <img src={asset.image} alt={asset.name} />
        </div>
      ))}
    </div>
      </div>
  )
}

export default KingdomAssets;