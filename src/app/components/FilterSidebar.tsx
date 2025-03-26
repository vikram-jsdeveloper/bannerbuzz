import { useState } from "react";
import ChevronUp from "../icons/ChevronUp";
import ChevronDown from "../icons/ChevronDown";
import styles from "./FilterSidebar.module.scss";

interface FilterOption {
  name: string;
  count: number;
}

interface FilterCategory {
  title: string;
  options: FilterOption[];
}

const filters: FilterCategory[] = [
  {
    title: "Category",
    options: [
      { name: "Business Banners", count: 19 },
      { name: "Event Banners", count: 32 },
      { name: "Interest Group Banners", count: 11 },
      { name: "Special Banners", count: 9 },
    ],
  },
  {
    title: "Use",
    options: [
      { name: "Indoor", count: 30 },
      { name: "Outdoor", count: 26 },
    ],
  },
  {
    title: "Print Type",
    options: [
      { name: "Non Printed", count: 1 },
      { name: "Printed", count: 78 },
    ],
  },
  {
    title: "Products Type",
    options: [
      { name: "Banners", count: 1 },
      { name: "Vinyl Banners", count: 4 },
    ],
  },
];

const FilterSidebar = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const toggleFilter = (name: string) => {
    setSelectedFilters((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className={styles.filterBox}>
      {filters.map((filter) => (
        <div key={filter.title} className={styles.box}>
          <div
            className={styles.title}
            onClick={() => toggleSection(filter.title)}
          >
            <h3>{filter.title}</h3>
            {openSection === filter.title ? <ChevronUp /> : <ChevronDown />}
          </div>
          {openSection === filter.title && (
            <ul className={styles.listBox}>
              {filter.options.map((option) => (
                <li key={option.name}>
                  <input
                    type="checkbox"
                    checked={selectedFilters[option.name] || false}
                    onChange={() => toggleFilter(option.name)}
                  />
                  <span>
                    {option.name} ({option.count})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
