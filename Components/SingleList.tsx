import styles from "../styles/SingleList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { uuid } from "uuidv4";

interface List {
  title: string;
  id: string;
}
interface Item {
  id: string;
  title: string;
}
type Items = Item[];
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
  const [itemName, setItemName] = useState<string>("e.g.Eggs");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setItemName(e.currentTarget.value);
  }
  function handleAddItem() {
    const newItem = { id: uuid(), title: itemName };
    setList([...list, newItem]);
  }
  return (
    <section>
      {/* Form */}
      <form className={styles.container}>
        <h3>My List</h3>
        <div className={styles.formControl}>
          <input
            type="text"
            className={styles.grocery}
            placeholder=""
            value={itemName}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={styles.submitBtn}
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
      </form>
      {/* End of form */}
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
