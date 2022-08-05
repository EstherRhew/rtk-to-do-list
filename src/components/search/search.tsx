import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './search.module.css'
import searchIcon from '../../assets/images/magnifying-glass-solid.svg'
import {useAppSelector} from "../../store/hooks";

const Search = ({searchContent}: {searchContent: (arg: string) => void}) => {
  const [value, setValue] = useState<string>('')
  const list = useAppSelector((state) => state.toDoList)

  useEffect(() => {
    searchContent(value)
  }, [value])


  return (
    <div className={styles.input_box}>
      <img src={searchIcon} alt="search" className={styles.search_icon}/>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.input}/>
    </div>
  );
};

export default Search;
