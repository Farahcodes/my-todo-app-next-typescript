import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";
import SideBarList from "./SideBarList";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

interface Lists {
  lists: Array<List>;
  name: string;
  id: number;
}
interface List {
  name: String;
  id: Number;
}

const Sidebar = () => {
  const [listOfLists, setListOfLists] = useState<Array<Lists>>([]);

  function handleAdd(e: React.MouseEvent<HTMLInputElement>) {
    setListOfLists(
      listOfLists.concat(<SideBarList key={listOfLists.length} />)
    );
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>My Lists</h3>
      </div>
      <div className={styles.container}>
        <button className={styles.btn} onClick={handleAdd}>
          Add New List
          <FaPlus />
        </button>
      </div>

      <div className={styles.listsContainer}>
        {listOfLists.map((item) => {
          const { name, id } = item;
          return (
            <article key={id} className={styles.newList}>
              <SideBarList name="New List" />
              <div className={styles.container}>
                <button
                  type="button"
                  className="styles.editBtn"
                  onClick={() => editList(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="styles.deleteBtn"
                  onClick={() => removeList(id)}
                >
                  <FaTrash />
                </button>
                <button
                  type="button"
                  className="styles.completeBtn"
                  onClick={() => completeList(id)}
                >
                  <FaCheck />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
