import React from "react";
import styles from "../styles/AddNewItemForm.module.css";
import { useState } from "react";
import Alert from "./Alert";

import { Items } from "./SingleList";

const AddNewItemForm = ({
  handleAddItem,
}: {
  handleAddItem: (title: string) => void;
}) => {
  const [itemName, setItemName] = useState<string>("e.g.Eggs");
  const [alert, setAlert] = useState<any>({
    show: false,
    msg: "",
    type: "",
  });

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setItemName(e.currentTarget.value);
  }
  function handleSubmitNewItem(e: any) {
    e.preventDefault();
    if (!itemName) {
      showAlert(true, "danger", "please enter value");
    } else {
      handleAddItem(itemName);
      showAlert(true, "success", "new item added");
    }
  }

  return (
    <section>
      {/* Form */}
      <form className={styles.container}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <h3>My List</h3>
        <div className={styles.formControl}>
          <input
            type="text"
            className={styles.grocery}
            placeholder=""
            value={itemName}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={styles.submitBtn}
            onClick={handleSubmitNewItem}
          >
            Add Item
          </button>
        </div>
      </form>
      {/* End of form */}
    </section>
  );
};

export default AddNewItemForm;
