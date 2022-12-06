import { ReactComponentElement, useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { FaPlus } from "react-icons/fa";
import Alert from "./Alert";
import { List } from "./Sidebar";

const FormList = ({ handleAdd }: { handleAdd: (title: string) => void }) => {
  const [title, setTitle] = useState<string>("e.g. Grocery");
  const [alert, setAlert] = useState<any>({
    show: false,
    msg: "",
    type: "",
  });

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function onClick() {
    if (!title) {
      showAlert(true, "danger", "please enter value");
    } else if (title) {
      showAlert(true, "success", "new list added");
      handleAdd(title);
    }
  }

  return (
    <div className={styles.container}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <input
        type="text"
        className={styles.input}
        value={title}
        onChange={handleChange}
      />
      <button className={styles.addBtn} onClick={onClick}>
        Add List
        <FaPlus />
      </button>
    </div>
  );
};

export default FormList;
