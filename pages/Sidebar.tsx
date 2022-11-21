import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import SideBarList from "./SideBarList";
import { uuid } from "uuidv4";
import AddList from "./FormList";

interface List {
  title: string;
  id: string;
}

type ListOfLists = List[];

const Sidebar = () => {
  const [listOfLists, setListOfLists] = useState<ListOfLists>([]);

  function handleAdd(title: string) {
    const newList = listOfLists.concat({ id: uuid(), title });
    setListOfLists(newList);
  }

  function handleEdit(title: string, id: string) {
    const cloneListOfLists = [...listOfLists];
    const specificList = cloneListOfLists.find((list) => list.id === id);
    if (specificList) {
      specificList.title = title;
    }
    setListOfLists(cloneListOfLists);
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
              <SideBarList title={title} onEdit={handleEdit} />
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
