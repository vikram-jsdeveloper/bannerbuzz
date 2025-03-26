"use client";

import { useEffect, useState } from "react";
import mockData from "../utils/mockData";
import styles from "./ProductListWithFilter.module.scss";
import FilterSidebar from "./FilterSidebar";

const ProductListWithFilter = () => {
  type List = {
    url: string;
    name: string;
    total_reviews: number;
    default_size: string;
    product_score: number;
    image_url: string;
    objectID: string;
    price: any;
  };

  const [list, setList] = useState<List[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setList(mockData);
  }, []);

  const totalPages = Math.ceil(list.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = list.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.container}>
      <ul className={styles.breadcrumbs}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Banner</a>
        </li>
        <li>
          <a href="/">Vinyl Banners</a>
        </li>
      </ul>
      <div className={styles.topBar}>
        <h3>Vinyl Banners</h3>
        <div className={styles.rightSide}>
          <label>Sort By</label>
          <select defaultValue={"Bestseller"}>
            <option value="position">Popularity</option>
            <option value="name">Product Name</option>
            <option value="price">Price</option>
            <option value="bestseller">Bestseller</option>
          </select>
        </div>
      </div>
      <div className={styles.listContainerWrapper}>
        <div className={styles.filtercontainer}>
          <FilterSidebar />
        </div>
        <div className={styles.listContainer}>
          {displayedItems.length > 0 && (
            <ul>
              {displayedItems.map((items) => (
                <li key={items.objectID}>
                  <a
                    href={items.url}
                    target="_blank"
                    aria-label={items.name}
                    className={styles.productImgBox}
                  >
                    <img src={items.image_url} alt={items.name} />
                  </a>
                  <p className={styles.cProductName}>{items.name}</p>
                  <div className={styles.ratingBox}>
                    <span className={styles.reviewRateBox}>
                      {items.product_score > 4 ? "4.4" : "3.2"}
                    </span>
                    <span className={styles.starRating} />
                    <span className={styles.totalReviewBox}>
                      {items.total_reviews}
                    </span>
                  </div>
                  <div className={styles.cProductSize}>
                    Size (W X H): <span>{items.default_size}</span>
                  </div>
                  <div className={styles.cProductSize}>
                    Start at: <span>{items.price.USD.default_formated}</span>
                  </div>
                  <div className={styles.btnBox}>
                    <a href={items.url}>Customize</a>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {/* Pagination */}
          <div className={styles.paginationContainer}>
            <p className={styles.recordline}>
              Showing {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, list.length)} of{" "}
              {list.length} records
            </p>
            <div className={styles.paginationButtons}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? styles.activePage : ""}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListWithFilter;
