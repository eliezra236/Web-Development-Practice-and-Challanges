import React from "react";
import Card from "./Card"
import Contacts from "../contacts"
import AllCards from "./AllCards"

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <AllCards contacts={Contacts} />
    </div>
  );
}

export default App;
