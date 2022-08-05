import React, {ChangeEvent, useState} from 'react';
import styles from './listItem.module.css'
import editIcon from '../../assets/images/pen-to-square-solid.svg'

const ListItem = ({item} : {item: any}) => {
  const [content, setContent] = useState(item.content)
  const [editable, setEditable] = useState<boolean>(false)

  const onEditTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const onClickEdit = () => {
    setEditable(!editable)
  }

  return (
    <li className={styles.item} style={{backgroundColor: item.color}}>
      <textarea className={styles.content} disabled={!editable} value={content} onChange={onEditTextArea}/>
      <div className={styles.footer}>
        <span className={styles.date}>{item.date}</span>
        <button className={styles.edit} onClick={onClickEdit}>
          {editable
            ? <span>Save</span>
          : <img src={editIcon} alt="edit"/>
          }
        </button>
      </div>

    </li>
  );
};

export default ListItem;
