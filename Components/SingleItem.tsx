import React, { useState } from "react";
import styles from "../styles/SingleItem.module.css";
import Alert from "./Alert";
import CheckBoxForm from "./CheckBoxForm";

import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

import { Item } from "./SingleList";

interface SingleItemProp {
  item: Item;
  handleEditItem: (title: string, id: string) => void;
  handleDeleteItem: (id: string) => void;
}

const SingleItem = ({
  item,
  handleEditItem,
  handleDeleteItem,
}: SingleItemProp) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [alert, setAlert] = useState<any>({
    show: false,
    msg: "",
    type: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

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
      handleEditItem(newTitle, item.id);
      setIsEditing(false);
      showAlert(true, "success", "title updated");
    }
  }

  function handleDeleteClick() {
    handleDeleteItem(item.id);
  }

  function handleCheck() {
    setIsChecked(true);
  }
  return (
    <div className={styles.listItem}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} item={item} />}
      {/* Conditional rendering based on if we are on edit mode  */}
      {isEditing ? (
        // if we are editing - display the edit title input
        <form className={styles.container}>
          <input
            name="editTitle"
            type="text"
            value={newTitle}
            onChange={handleEditInputChange}
            className={styles.input}
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
        <p className={styles.title}>{item.title}</p>
      )}
      <div className={styles.btnContainer}>
        <button
          type="button"
          className={styles.editBtn}
          onClick={handleEditClick}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={handleDeleteClick}
        >
          <FaTrash />
        </button>
        <button
          type="button"
          className={styles.completeBtn}
          onClick={handleCheck}
        >
          <CheckBoxForm isChecked={isChecked} />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
