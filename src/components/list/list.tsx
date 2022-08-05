import React, {useEffect} from 'react';
import ListItem from "../listItem/listItem";
import styles from './list.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {toDoState} from "../../store/toDoListSlice";


const List = ({list}: {list: toDoState[]}) => {


  return (
    <ul className={styles.list}>
      {[...list].reverse().map((item) =>
        <ListItem item={item} key={item.id}/>
      )}
    </ul>
  );
};

export default List;
