import React from "react";
import styles from "../styles/AddNewItemForm.module.css";
import { useState } from "react";
import { Items } from "./SingleList";
import { uuid } from "uuidv4";

const AddNewItemForm = ({
  handleAddItem,
}: {
  handleAddItem: (title: string) => void;
}) => {
  const [itemName, setItemName] = useState<string>("e.g.Eggs");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setItemName(e.currentTarget.value);
  }
  function handleSubmitNewItem(e: any) {
    e.preventDefault();
    handleAddItem(itemName);
  }

  return (
    <section>
      {/* Form */}
      <form className={styles.container}>
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
