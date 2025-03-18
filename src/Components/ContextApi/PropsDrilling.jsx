import React from "react";

const PropsDrilling = () => {
  const Parent = () => {
    let is_login = true;
    let is_logout = false;

    return (
      <>
        <Child1 login={is_login} logout={is_logout} />
      </>
    );
  };

  const Child1 = ({ login, logout }) => {
    return (
      <>
        <Child2 a={login} b={logout} />
      </>
    );
  };

  const Child2 = (props) => {
    return (
      <>
        <h1>{props.a ? "User is login" : "not login"}</h1>
      </>
    );
  };
  return (
    <div>
      <Parent />
    </div>
  );
};

export default PropsDrilling;
