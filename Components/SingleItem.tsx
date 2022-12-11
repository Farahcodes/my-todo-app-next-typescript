import React from "react";
import styles from "../styles/SingleItem.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

import { Item } from "./SingleList";

interface SingleItemProp {
  item: Item;
}

const SingleItem = ({ item }: SingleItemProp) => {
  return (
    <div className={styles.listItem}>
      <p className={styles.title}>{item.title}</p>
      <div className={styles.btnContainer}>
        <button
          type="button"
          className={styles.editBtn}
          //   onClick={() => editItem(item.id)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className={styles.deleteBtn}
          //   onClick={() => removeItem(item.id)}
        >
          <FaTrash />
        </button>
        <button
          type="button"
          className={styles.completeBtn}
          //   onClick={() => completeItem(item.id)}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
