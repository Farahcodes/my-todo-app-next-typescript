import styles from "../styles/SingleList.module.css";
import { useState } from "react";
import { uuid } from "uuidv4";
import AddNewItemForm from "./AddNewItemForm";
import SingleItem from "./SingleItem";

export interface List {
  title: string;
  id: string;
}
export interface Item {
  id: string;
  title: string;
}
export type Items = Item[];

const SingleList = () => {
  const [list, setList] = useState<Items>([]);

  function handleAddItem(title: string) {
    const newItem = { id: uuid(), title };
    setList([...list, newItem]);
  }

  function handleEditItem(title: string, id: string) {
    const cloneList = [...list];
    const specificItem = cloneList.find((item) => item.id === id);
    if (specificItem) {
      specificItem.title = title;
    }
    setList(cloneList);
  }

  function handleDeleteItem(id: string) {
    const cloneList = [...list];
    setList(cloneList.filter((item) => item.id !== id));
  }

  return (
    <section>
      <AddNewItemForm handleAddItem={handleAddItem} />
      {/* List */}
      <div className={styles.list}>
        {list.map((item) => {
          const { id, title } = item;
          return (
            <article key={id}>
              <SingleItem
                item={item}
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
              />
            </article>
          );
        })}
      </div>
      {/* End of List */}
    </section>
  );
};

export default SingleList;
