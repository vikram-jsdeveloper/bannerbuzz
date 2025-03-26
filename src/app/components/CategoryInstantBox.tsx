"use client";

import { useState, useRef } from "react";
import styles from "./CategoryInstantBox.module.scss";

const CategoryInstantBox = () => {
  const options = [
    "Memorial Day Banners",
    "4th of July Banners",
    "Labor Day Banners",
    "Halloween Banners",
    "Homecoming Banners",
    "Columbus Day Banners",
    "Fall Banners",
    "Wedding Anniversary Banners",
  ];

  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Custom Vinyl Banners");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className={styles.categoryInstantBox}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.dropboxLabel}>Select your Product</div>
          <div className={styles.dropBoxWrapper}>
            <button className={styles.searchBtn} onClick={handleButtonClick}>
              {selected}
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.46094L5 5.46094L1 1.46094"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {isOpen && (
              <div className={styles.dropBox}>
                <input
                  type="text"
                  className={styles.inputSearch}
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  ref={inputRef}
                />
                <ul className={styles.listing}>
                  {filteredOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`${
                        selected === option ? styles.selected : ""
                      }`}
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                        setSearch("");
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.dropboxLabel}>Size (W X H)</div>
          <select name="size" defaultValue={"3 x 2"}>
            <option value="3x2">3 x 2</option>
            <option value="2x3">2 x 3</option>
            <option value="2x4">2 x 4</option>
            <option value="4x2">4 x 2</option>
            <option value="3x4">3 x 4</option>
            <option value="6x2">6 x 2</option>
            <option value="3x6">3 x 6</option>
            <option value="6x3">6 x 3</option>
            <option value="4x6">4 x 6</option>
            <option value="6x4">6 x 4</option>
            <option value="4x8">4 x 8</option>
            <option value="8x4">8 x 4</option>
            <option value="4x10">4 x 10</option>
            <option value="6x8">6 x 8</option>
            <option value="6x10">6 x 10</option>
            <option value="custom">Custom Size</option>
          </select>
          <select name="size_unit">
            <option value="ft">Ft</option>
            <option value="in">In</option>
          </select>
          <div className={styles.dropboxLabel}>Qty</div>
          <input type="text" />
          <div className={styles.totalBox}>
            <span className={styles.label}>Price</span>
            <div className={styles.price}>
              <span className={styles.oldPrice}>$11.65</span>
              <span className={styles.newPrice}>$6.99</span>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryInstantBox;
