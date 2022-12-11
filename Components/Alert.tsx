import { useEffect } from "react";
import { List } from "./Sidebar";
import { Item } from "./SingleList";

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: Function;
  itemList: List;
  item: Item;
}
const Alert = ({ type, msg, removeAlert, itemList, item }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [itemList, removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
