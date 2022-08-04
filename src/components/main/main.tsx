import React from 'react';
import Search from "../search/search";
import styles from './main.module.css'
import List from "../list/list";

const Main = () => {
  return (
    <main className={styles.main}>
      <Search />
      <h2 className={styles.title}>ToDo</h2>
      <List />
    </main>
  );
};

export default Main;
