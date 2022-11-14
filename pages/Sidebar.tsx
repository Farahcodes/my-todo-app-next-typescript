import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";
import SideBarList from "./SideBarList";
import { uuid } from "uuidv4";

interface List {
  title: string;
  id: string;
}

type ListOfLists = List[];

const Sidebar = () => {
  const [listOfLists, setListOfLists] = useState<ListOfLists>([]);
  const [name, setName] = useState<string>("e.g. Grocery");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  function handleAdd() {
    const newList = listOfLists.concat({ id: uuid(), title: name });
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
              <SideBarList title={title} id={id} />
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
