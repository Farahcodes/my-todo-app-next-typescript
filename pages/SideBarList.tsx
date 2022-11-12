import styles from "../styles/SideBar.module.css";
interface SideBarListProp {
  name: string;
  id: number;
}

const SideBarList = (props: SideBarListProp) => {
  return (
    <div className={styles.listsContainer}>
      <div>New List</div>
    </div>
  );
};

export default SideBarList;
