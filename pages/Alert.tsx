import { useEffect } from "react";
import List from "./List";

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: Function;
}
const Alert = ({ type, msg, removeAlert }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
