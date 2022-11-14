import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";

const AddList = ({
  name,
  handleChange,
  handleAdd,
}: {
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleAdd: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div>
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
  );
};

export default AddList;
