import React, { useContext } from "react";
import { UserProvider } from "./ContextApi";

const Home = () => {
  const { name, age, information, color, setColor ,login,logout} = useContext(UserProvider);

  const BtnClick = () => {
    setColor(!color);
  };
  document.body.style.backgroundColor = color ? "black" : "white";

  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Name : {age}</h1>

      {information.is_login ? "user is login" : "user is not login"}

      <h1>
        {(information.username = "rohan@123" == "rohan@123" ? "true" : "false")}
      </h1>

      <button onClick={BtnClick}>{color ? "Dark" : "Light"}</button>
    </div>
  );
};

export default Home;
