import { render } from "@testing-library/react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Principal } from "./Principal";

import "./styles.css";



function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "admin1",
      password: "admin1"
    }
  ];

  const errors = {
    uname: "Usuario invalido",
    pass: "Contraseña invalida"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // contraseña invalida
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Usuario invalido
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Genera mensaje error

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Inicio de sesion
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
         <input type="submit" />
        </div>
      </form>
    </div>
  );
    const a = ()=> {
      setIsSubmitted(false);
      console.log(isSubmitted);
      render(<App/>);
    }
  return (
  <><Principal />
  <button onClick={a}>Cerrar sesion</button>
  </>
  
  );
}

export default App;