import React, { useState } from "react";

const Form = () => {
  const [empty, setEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    !e.target.value ? setEmpty(true) : setEmpty(false);
  };

  return (
    <div className="container py-3">
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="email"
            id="email"
            className="form-control my-2"
            placeholder="Enter Email"
          />
          <label for="email" className="form-label">
            Email
          </label>
        </div>
        <select className="form-select">
          <option>1</option>
          <option>2</option>
        </select>
        <button className="btn btn-outline-primary">Submit</button>
      </form>
      {empty ? (
        <div className="alert alert-danger alert-dimissible" role="alert">
          Fail
          <button
            className="btn-close"
            aria-label="close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
