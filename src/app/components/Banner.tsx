import React from "react";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.container}>
      <img
        src="https://cdn.bannerbuzz.com/media/banner/BB_ProdSectionBanner_Vinyl-Banners_1920x380.jpg"
        alt="Category Vinyl-Banners Banner"
      ></img>
    </div>
  );
}
