import styles from "../styles/SideBarList.module.css";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { List } from "./Sidebar";
import Alert from "./Alert";

interface SideBarListProp {
  itemList: List;
  handleEdit: (title: string, id: string) => void;
}

const SideBarList = ({ handleEdit, itemList }: SideBarListProp) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [alert, setAlert] = useState<any>({
    show: false,
    msg: "",
    type: "",
  });

  function handleEditInputChange(e: React.FormEvent<HTMLInputElement>) {
    setNewTitle(e.currentTarget.value);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleEditSubmit(e: any) {
    e.preventDefault();
    if (!newTitle) {
      showAlert(true, "danger", "please enter value");
    } else if (newTitle && isEditing) {
      handleEdit(newTitle, itemList.id);
      setIsEditing(false);
      showAlert(true, "success", "title updated");
    } else {
      showAlert(true, "success", "title updated");
    }
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  useEffect(() => {
    // storing input new title
    localStorage.setItem("newTitle", JSON.stringify(newTitle));
  }, [newTitle]);

  return (
    <div className={styles.listsContainer}>
      {alert.show && (
        <Alert {...alert} removeAlert={showAlert} itemList={itemList} />
      )}
      {/* Conditional rendering based on if we are on edit mode  */}
      {isEditing ? (
        // if we are editing - display the edit title input
        <form className={styles.container}>
          <input
            name="editTitle"
            type="text"
            value={newTitle}
            onChange={handleEditInputChange}
          />
          <button
            type="submit"
            onClick={handleEditSubmit}
            className={styles.btn}
          >
            Update
          </button>
          {/* cancel editing mode */}
          <button className={styles.btn} onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        // if we are not editing - display the current title through props
        <div>{itemList.title}</div>
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
