

import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "../styles/Royal.module.scss"

function RoyalFamilly() {
    const images = [
  {
    intro:"The most powerfull Queen",
    src:
      "https://image.lexica.art/full_jpg/6f3a7812-d59e-4fd2-b7fe-1c33ae762a37",
    legend: "Queen Idyia",
    
  },
  {
    intro:"The most powerfull King",
    src:
      "https://image.lexica.art/full_jpg/e6729531-41c1-420d-87ea-8f67b0f60986",
    legend: "King Aetes",
   
  },
  {
    intro:"The most powerfull Princess",
    src:
      "https://image.lexica.art/full_jpg/bc2c7fba-d327-4414-ac2f-693b676811aa",
    legend: "Princess Madeas",
    
  },
  {
    intro:"The most powerfull Prince",
    src:
      "https://image.lexica.art/full_jpg/51313ba6-7863-4d69-9dd6-2ed0a61f28b4",
    legend: "Prince Olthacès ",
    
  },
];
  return (
<Carousel autoPlay className={styles["the-carroussel"]}>
  {images.map((image, index) => (
    <div key={index} className={styles["caroussel-group"]}>
      <p className={styles["carrousel-image-describe"]}>{image.intro}</p>
      <img className={styles["carrousel-image"]} alt="" src={image.src} />
      <p className={styles["carrousel-image-legend"]}>{image.legend}</p>
    </div>
  ))}
</Carousel>
);
}

export default RoyalFamilly