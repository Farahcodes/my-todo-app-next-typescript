import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";
import SideBarList from "./SideBarList";

interface Lists {
  lists: Array<List>;
  title: string;
  id: number;
}
interface List {
  name: String;
  id: Number;
}

const Sidebar = () => {
  const [listOfLists, setListOfLists] = useState<Array<Lists>>([]);

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
        <button className={styles.btn} onClick={handleAdd}>
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
