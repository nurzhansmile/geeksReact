import React from "react";
import Card from "./Card/Card";

export const UserList = () => {
  const users = [
    {
      name: "Aiyma",
      age: 20,
      city: "Bishkek",
      active: false,
      img: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      name: "Nurzhan",
      age: 20,
      city: "Bishkek",
      active: true,
      img: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    {
      name: "Dastan",
      age: 20,
      city: "Bishkek",
      active: true,
      img: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    },
  ];
  // if(active===true){

  // }
  return (
    <div className="cards">
      {users.map((user) => {
        if (user.active === true) {
          return(
          <Card
            name={user.name}
            age={user.age}
            city={user.city}
            active={user.active}
            img={user.img}
          
          />
          )
        }
      })}
    </div>
  );
};
