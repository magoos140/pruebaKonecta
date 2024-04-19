import React, { useEffect } from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []); 

  return (
    <div className="app__container">
      <Header />
      <div className="container__title_app">
        <h1 className="title__app">Intranet Konecta</h1>
      </div>
      <div className="forms__container">
        <LoginForm />
        <LoginRegister />
      </div>
    </div>
  );
}

export default App;
