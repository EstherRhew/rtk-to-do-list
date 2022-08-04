import React from 'react';
import styles from './sidebar.module.css';
import logoIcon from '../../assets/images/logo_icon.png'
import plusIcon from '../../assets/images/plus-solid.svg'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {add} from "../../store/toDoListSlice";

export const colorTable = {
  orange: "#F6bd60",
  beige: "#F7ede2",
  lightPink: "#F5cac3",
  green: "#84a59d",
  pink: "#f28482"
}

const Sidebar = () => {
  const list = useAppSelector((state) => state.toDoList)
  const dispatch = useAppDispatch()

  const addToDo = (color: string) => {
    dispatch(add({
      id: list.length + 1,
      content: "",
      date: "",
      color
    }))
  }

  return (
    <aside className={styles.sidebar}>
      <img src={logoIcon} alt="logo" className={styles.logo}/>
      <div className={styles.add}>
        <button className={styles.button}><img src={plusIcon} alt=""/></button>
        <div className={styles.colors} onClick={() => addToDo(colorTable.orange)}></div>
        <div className={styles.colors} onClick={() => addToDo(colorTable.beige)}></div>
        <div className={styles.colors} onClick={() => addToDo(colorTable.lightPink)}></div>
        <div className={styles.colors} onClick={() => addToDo(colorTable.green)}></div>
        <div className={styles.colors} onClick={() => addToDo(colorTable.pink)}></div>
      </div>
    </aside>
  );
};

export default Sidebar;
