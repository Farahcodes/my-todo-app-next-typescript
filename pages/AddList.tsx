import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";

const AddList = ({
  handleAdd,
  onChange,
}: {
  handleAdd: (title: string) => void;
  onChange: Function;
}) => {
  const [title, setTitle] = useState<string>("e.g. Grocery");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function onClick() {
    handleAdd(title);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={title}
        onChange={handleChange}
      />
      <button className={styles.addBtn} onClick={onClick}>
        {isEditing ? "Edit List" : "Add List"}
        <FaPlus />
      </button>
    </div>
  );
};

export default AddList;
