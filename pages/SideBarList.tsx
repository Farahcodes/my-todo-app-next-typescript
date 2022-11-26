import styles from "../styles/SideBarList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

interface SideBarListProp {
  title: string;
  handleEdit: (title: string, id: string) => void;
}

const SideBarList = (props: SideBarListProp) => {
  const [newTitle, setNewTitle] = useState<string>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  function handleEditInputChange(e: React.FormEvent<HTMLInputElement>) {
    setNewTitle(e.currentTarget.value);
  }

  function handleEditClick() {
    setIsEditing(true);
  }
  function handleEditSubmit(e: any) {
    e.preventDefault();
    let newTitle = props.title;
    props.handleEdit(newTitle, uuid());
    // setNewTitle("");
    // setIsEditing(false);
  }

  useEffect(() => {
    // storing input new title
    localStorage.setItem("newTitle", JSON.stringify(newTitle));
  }, [newTitle]);

  return (
    <div className={styles.listsContainer}>
      {/* Conditional rendering based on if we are on edit mode  */}
      {isEditing ? (
        // if we are editing - display the edit title input
        <form>
          <input
            name="editTitle"
            type="text"
            placeholder={props.title}
            value={newTitle}
            onChange={handleEditInputChange}
          />
          <button type="submit" onSubmit={handleEditSubmit}>
            Update
          </button>
          {/* cancel editing mode */}
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
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
