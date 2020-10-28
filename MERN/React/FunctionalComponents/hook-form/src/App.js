import React, {useState} from "react";
import './App.css';

import UserForm from "./components/FormComponent.js"
import FormData from "./components/DisplayComponent.js"

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <FormData data={state}/>
    </div>
  );
}

export default App;
