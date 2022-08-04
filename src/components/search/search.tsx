import React, {useState} from 'react';
import styles from './search.module.css'
import searchIcon from '../../assets/images/magnifying-glass-solid.svg'

const Search = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div className={styles.input_box}>
      <img src={searchIcon} alt="search" className={styles.search_icon}/>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.input}/>
    </div>
  );
};

export default Search;
