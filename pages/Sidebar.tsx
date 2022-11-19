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
  const [editing, setEditing] = useState<boolean>(false);
  function setUpdate(updatedTitle: string, id: string) {
    listOfLists.map((list) => {
      if (list.id === id) {
        list.title = updatedTitle;
      }
      return list;
    });
  }

  function handleAdd(title: string) {
    const newList = listOfLists.concat({ id: uuid(), title });
    setListOfLists(newList);
  }

  function handleEdit(title: string, id: string) {
    const specificList = listOfLists.find((list) => list.id === id);
    setEditing(true);
    setUpdate(specificList.title);
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>My Lists</h3>
      </div>
      <div className={styles.container}>
        <AddList handleAdd={handleAdd} setUpdate={setUpdate} />
      </div>

      <div className={styles.listsContainer}>
        {listOfLists.map((item) => {
          const { title, id } = item;
          return (
            <article key={id} className={styles.newList}>
              <SideBarList title={title} id={id} handleEdit={handleEdit} />
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
