import styles from "../styles/SideBarList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState } from "react";

interface SideBarListProp {
  title: string;
  onEdit: (title: string, id: string) => void;
}

const SideBarList = (props: SideBarListProp) => {
  const [titleEdit, setTitleEdit] = useState<string>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div className={styles.listsContainer}>
      <div>{props.title}</div>
      <div className={styles.container}>
        <button type="button" className={styles.editBtn}>
          <FaEdit />
        </button>
        <button type="button" className={styles.deleteBtn}>
          <FaTrash />
        </button>
        <button type="button" className={styles.completeBtn}>
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default SideBarList;
