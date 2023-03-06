import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import { setFirstName, setLastName } from "./userSlice";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [firstName, setFirstNameValue] = React.useState("");
  const [lastName, setLastNameValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFirstName(firstName));
    dispatch(setLastName(lastName));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstNameValue(e.target.value)}
          placeholder="Enter your first name.."
        />
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastNameValue(e.target.value)}
          placeholder="Enter your last name.."
        />
        <button type="submit">Display Name</button>
      </form>
      {user.firstName && <h1>First Name: {user.firstName}</h1>} <br></br>
      {user.lastName && <h1>Last Name: {user.lastName}</h1>}
    </div>
  );
}

export default App;
