import React from "react";
import Card from "./Card";

function AllCards(contacts) {
    return (
    <div>
    {contacts.contacts.map((contact) => (
     <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      mail={contact.email}
    />
  ))}
  </div>
    )
}

export default AllCards;
