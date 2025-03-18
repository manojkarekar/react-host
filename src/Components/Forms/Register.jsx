import React, { useState } from "react";

const Register = () => {
  // this usestate is used to get input data
  const [Formdata, setFromData] = useState({
    name: "",
    contact: "",
    email : "",

  });

  // get object after form submit
  const [SubmitForm, setsubmitform] = useState(null);

  //validations errors
  const [errors, setErrors] = useState({
    name: "",
    contact: "",

  });

  const getData = (e) => {
    const { name, value } = e.target;
    console.log(name,value);

    setFromData({ ...Formdata, [name]: value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();

    let formErrors  = {};
    let is_valid = true;

    //   logic for check validations
    if (!Formdata.name) {
        formErrors.full_name = "name is required..";
        is_valid = false;
    }

    if(!Formdata.contact){
        formErrors.contact = "contact is required...";
        is_valid = false;
    }

    console.log(formErrors);
    
    if(!is_valid){
        setErrors(formErrors);
    }else{
      console.log(Formdata);
        setsubmitform(Formdata);
        setErrors({}); 
    }
  };

  return (
    <>
      <form action="" onSubmit={FormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={Formdata.name}
            onChange={getData}
            className="form-control"
          />
          {errors.full_name && <small className="text-danger">{errors.full_name}</small>}
        </div>


        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Enter your contact
          </label>
          <input   
            type="text"
            name="contact"
            value={Formdata.contact}
            onChange={getData}
            className="form-control"
            />
            {errors.contact && <small className="text-danger">{errors.contact}</small>}
        </div>

        
        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Enter your Email
          </label>
          <input
            type="email"
            name="email"
            value={Formdata.email}
            onChange={getData}
            className="form-control"
            />
            {/* {errors.contact && <small className="text-danger">{errors.contact}</small>} */}
        </div>


        <div className="mb-4">
          <button className="btn btn-info btn-sm">Submit</button>
        </div>
      </form>

      {SubmitForm && (
        <>
          <h1>{SubmitForm.name}</h1>
          <h1>{SubmitForm.contact}</h1>
          <h1>{SubmitForm.email}</h1>
        </>
      )}
    </>
  );
};

export default Register;
    