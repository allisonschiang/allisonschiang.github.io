import React, { useState, useEffect } from 'react';
import MediaCard from '../Card'; 
import Masonry from 'react-masonry-css';
import data from '../../data.json';
import styles from './MediaGrid.module.css'; // Assuming your CSS module is in the same directory

function MediaGrid({ filterType }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on filterType
    let newData;
    if (filterType === "All") {
      newData = data.cardData;
    } else {
      newData = data.cardData.filter(item => item.id === filterType);
    }
    setFilteredData(newData);
  }, [filterType]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className={styles.mediaGridContainer}>
      <div className={styles.masonryGrid}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}>
          {filteredData.map(item => (
            <div key={item.id} className={styles.masonryItem}>
              <MediaCard {...item} />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default MediaGrid;
