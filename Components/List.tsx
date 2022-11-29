import styles from "../styles/List.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
interface Item {
  id: number;
  title: string;
}
const List = ({
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
  return (
    <div className={styles.list}>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className={styles.listItem} key={id}>
            <p className={styles.title}>{title}</p>
            <div className={styles.btnContainer}>
              <button
                type="button"
                className="styles.editBtn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="styles.deleteBtn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
              <button
                type="button"
                className="styles.completeBtn"
                onClick={() => completeItem(id)}
              >
                <FaCheck />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
