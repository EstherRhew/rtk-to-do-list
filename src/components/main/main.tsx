import React, {ChangeEvent, useEffect, useState} from 'react';
import Search from "../search/search";
import styles from './main.module.css'
import List from "../list/list";
import {useAppSelector} from "../../store/hooks";

const Main = () => {
  const list = useAppSelector((state) => state.toDoList)
  const [copiedList, setCopiedList] = useState(list)

  const searchContent = (value: string) => {
    if (value === '') {
      setCopiedList(list)
      return;
    }
    const filtered = list.filter((item) =>item.content.toLowerCase().includes(value.toLowerCase()))
    setCopiedList(filtered)
  }

  useEffect(() => {
    setCopiedList(list)
  }, [list])

  return (
    <main className={styles.main}>
      <Search searchContent={searchContent}/>
      <h2 className={styles.title}>ToDo</h2>
      <List list={copiedList}/>
    </main>
  );
};

export default Main;
