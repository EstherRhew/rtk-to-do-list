import React, {useEffect} from 'react';
import ListItem from "../listItem/listItem";
import styles from './list.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks";

const List = () => {
  const list = useAppSelector((state) => state.toDoList)

  useEffect(() => {
    console.log(list, 'list')
  }, [list])
  return (
    <ul className={styles.list}>
      {list.map((item) =>
        <ListItem item={item}/>
      )}
    </ul>
  );
};

export default List;
