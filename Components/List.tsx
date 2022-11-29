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
    <section className="section-center section">
      {/* Form */}
      <form>
        <h3>My List</h3>
        <div className={styles.formControl}>
          <input
            type="text"
            className={styles.grocery}
            placeholder="e.g. eggs"
          />
          <button type="submit" className={styles.submitBtn}></button>
        </div>
      </form>
      {/* End of form */}
      {/* List */}
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
      {/* End of List */}
    </section>
  );
};

export default List;
