import { useState, useEffect } from "react";
import styles from "../styles/Sidebar.module.css";
import SideBarList from "./SideBarList";
import { uuid } from "uuidv4";
import AddNewListForm from "./AddNewListForm";

export interface List {
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

  function handleDelete(id: string) {
    const cloneListOfLists = [...listOfLists];
    setListOfLists(cloneListOfLists.filter((list) => list.id !== id));
  }
  useEffect(() => {
    localStorage.setItem("listOfLists", JSON.stringify(listOfLists));
  }, [listOfLists]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3>My Lists</h3>
      </div>
      <div className={styles.container}>
        <AddNewListForm handleAdd={handleAdd} />
      </div>

      <div className={styles.listsContainer}>
        {listOfLists.map((item) => {
          const { title, id } = item;
          return (
            <article key={id} className={styles.newList}>
              <SideBarList
                itemList={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
