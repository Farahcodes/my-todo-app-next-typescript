import Sidebar from "../Components/Sidebar";
import List from "../Components/List";
import React, { Fragment } from "react";
import SingleList from "../Components/SingleList";

export default function Home() {
  return (
    <div className="fragmentContainer">
      <Sidebar />
      <SingleList />
    </div>
  );
}
