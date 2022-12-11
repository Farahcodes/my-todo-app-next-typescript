import styles from "../styles/SingleList.module.css";
import { useState } from "react";
import { uuid } from "uuidv4";
import AddNewItemForm from "./AddNewItemForm";
import Alert from "./Alert";
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

const SingleList = ({
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
  const [list, setList] = useState<Items>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [alert, setAlert] = useState<any>({
    show: false,
    msg: "",
    type: "",
  });

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

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

  return (
    <section>
      <AddNewItemForm handleAddItem={handleAddItem} />
      {/* List */}
      <div className={styles.list}>
        {list.map((item) => {
          const { id, title } = item;
          return (
            <article key={id}>
              <SingleItem item={item} />
            </article>
          );
        })}
      </div>
      {/* End of List */}
    </section>
  );
};

export default SingleList;
