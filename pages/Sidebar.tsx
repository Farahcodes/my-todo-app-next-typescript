import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";
import SideBarList from "./SideBarList";
import { uuid } from "uuidv4";

interface Lists {
  title: string;
  id: number;
}

const Sidebar = () => {
  const [listOfLists, setListOfLists] = useState<Array<Lists>>([]);
  const [name, setName] = useState<string>("e.g. Grocery");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  function handleAdd(e: React.MouseEvent<HTMLInputElement>) {
    const newList = listOfLists.concat(
      <SideBarList key={listOfLists.length} />
    );
    setListOfLists(newList);
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>My Lists</h3>
      </div>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={handleChange}
        />
        <button className={styles.addBtn} onClick={handleAdd}>
          Add New List
          <FaPlus />
        </button>
      </div>

      <div className={styles.listsContainer}>
        {listOfLists.map((item) => {
          const { title, id } = item;
          return (
            <article key={id} className={styles.newList}>
              <SideBarList title={name} id={id} />
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
