import React from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.container}>
      <Image
        width={1920}
        height={380}
        src="https://cdn.bannerbuzz.com/media/banner/BB_ProdSectionBanner_Vinyl-Banners_1920x380.jpg"
        alt="Category Vinyl-Banners Banner"
      />
    </div>
  );
}
