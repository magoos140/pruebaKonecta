import React from "react";
import Header from "../components/Header";
import Employ from "../components/Employ";


function Dashboard() {

  return (
    <div className="app__container">
      <Header />
      <div className="container__title_app">
        <h1 className="title__app">Dashboard</h1>
      </div>
      <div>
        <Employ />
      </div>
    </div>
  );
}


export default Dashboard;
