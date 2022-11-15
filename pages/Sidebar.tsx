import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import SideBarList from "./SideBarList";
import { uuid } from "uuidv4";
import AddList from "./AddList";

interface List {
  title: string;
  id: string;
}

type ListOfLists = List[];

const Sidebar = () => {
  const [listOfLists, setListOfLists] = useState<ListOfLists>([]);

  function handleAdd() {
    const newList = listOfLists.concat({ id: uuid() });
    setListOfLists(newList);
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>My Lists</h3>
      </div>
      <div className={styles.container}>
        <AddList handleAdd={handleAdd} />
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
