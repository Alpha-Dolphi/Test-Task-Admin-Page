import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

export const ImageSlide = ({ photos }) => {
  const images = photos.map(photo => photo.url);
  const [index, setIndex] = useState(0);

  const next = () =>
    index === images.length-1 ? setIndex(0) : setIndex(index+1);

  const prev = () =>
    !index ? setIndex(images.length-1) : setIndex(index-1);

  return (
    <div className={styles.imageSlider}>
      <img className={styles.mainImg} src={images[index]} />
      <div className={styles.actions}>
        <button className={styles.back} onClick={() => prev()}></button>
        <button className={styles.forward} onClick={() => next()}></button>
      </div>
      <div className={styles.albumImages}>
      {
        images.map((srcImage, i) => (
          <img
            key={i}
            src={srcImage}
            onClick={() => setIndex(i)}
            className={index === i ? styles.active : ''}
          />
        ))
      }
      </div>
    </div>
  )
};