import React from "react";
import { useState } from "react";

const NewForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [FormData ,setFromData] = useState(null);


  const SetData = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const FormSubmit  = (e)=>{
    e.preventDefault();
    setFromData({name,contact})
  }
  console.log(FormData);
  return (
    <>
      <form action="" onSubmit={FormSubmit}>
        <div className="container">
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={SetData}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Enter your contact
            </label>
            <input
              type="text"
              name="contact"
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <button className="btn btn-info btn-sm">Submit</button>
          </div>
        </div>
      </form>

    <h1>{FormData && FormData.name}</h1>
    <h1>
      {FormData && FormData.contact}</h1>
    </>
  );
};

export default NewForm;
