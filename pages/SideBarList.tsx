import styles from "../styles/SideBarList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState } from "react";

interface SideBarListProp {
  title: string;
  handleEdit: (title: string, id: string) => void;
}

const SideBarList = (props: SideBarListProp) => {
  const [currentTitle, setCurrentTitle] = useState<string>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  function handleEditInputChange(e: React.FormEvent<HTMLInputElement>) {
    setCurrentTitle(e.currentTarget.value);
  }
  function handleEditClick() {
    setIsEditing(true);
    props.handleEdit;
  }

  return (
    <div className={styles.listsContainer}>
      {/* Conditional rendering based on if we are on edit mode  */}
      {isEditing ? (
        // if we are editing - display the edit title input
        <div>
          <input
            name="editTitle"
            type="text"
            placeholder="Edit title"
            value={currentTitle}
            onChange={handleEditInputChange}
          />
          <button type="submit">Update</button>
          {/* cancel editing mode */}
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        // if we are not editing - display the current title through props
        <div>{props.title}</div>
      )}

      <div className={styles.container}>
        <button
          type="button"
          className={styles.editBtn}
          onClick={handleEditClick}
        >
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
