import styles from "../styles/SideBarList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

interface SideBarListProp {
  title: string;
  id: number;
}

const SideBarList = (props: SideBarListProp) => {
  return (
    <div className={styles.listsContainer}>
      <div>New List</div>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.editBtn}
          onClick={() => editList()}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={() => removeList()}
        >
          <FaTrash />
        </button>
        <button
          type="button"
          className={styles.completeBtn}
          onClick={() => completeList()}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default SideBarList;
