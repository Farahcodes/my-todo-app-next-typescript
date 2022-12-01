import styles from "../styles/SingleList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { uuid } from "uuidv4";
import AddNewItemForm from "./AddNewItemForm";

export interface List {
  title: string;
  id: string;
}
export interface Item {
  id: string;
  title: string;
}
export type Items = Item[];
const SingleList = ({
  items,
  removeItem,
  editItem,
  completeItem,
}: {
  items: Array<Item>;
  removeItem: Function;
  editItem: Function;
  completeItem: Function;
}) => {
  const [list, setList] = useState<Items>([]);

  function handleAddItem(title: string) {
    const newItem = { id: uuid(), title };
    setList([...list, newItem]);
  }

  return (
    <section>
      <AddNewItemForm handleAddItem={handleAddItem} />
      {/* List */}
      <div className={styles.list}>
        {list.map((item) => {
          const { id, title } = item;
          return (
            <article className={styles.listItem} key={id}>
              <p className={styles.title}>{title}</p>
              <div className={styles.btnContainer}>
                <button
                  type="button"
                  className={styles.editBtn}
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
                <button
                  type="button"
                  className={styles.completeBtn}
                  onClick={() => completeItem(id)}
                >
                  <FaCheck />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {/* End of List */}
    </section>
  );
};

export default SingleList;
