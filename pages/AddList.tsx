import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";

const AddList = ({
  handleAdd,
}: {
  handleAdd: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [title, setTitle] = useState<string>("e.g. Grocery");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={title}
        onChange={handleChange}
      />
      <button className={styles.addBtn} onClick={handleAdd}>
        Add New List
        <FaPlus />
      </button>
    </div>
  );
};

export default AddList;
