import React, {useState} from "react";
import { Login } from "./Login";
import { Register } from './Register';

function SignUp() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) =>{
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default SignUp;
