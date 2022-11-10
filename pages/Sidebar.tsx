import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h1>My Lists</h1>
      </div>
    </aside>
  );
};

export default Sidebar;
