import React, { Component, useState } from "react";
import "../css/addremove.css";
function AddRemoveInputField() {
 
  const [inputFields, setInputFields] = useState([
    {
      fullName: "",
      email: "",
      role: "",
    },
  ]);
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fullName: "",
        email: "",
        role: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    evnt.preventDefault()
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <div className="container-1">
      <div className="row">
        <div className="col-sm-8">
          {inputFields.map((data, index) => {
            const { fullName, email, role } = data;
            return (
              <div className="row my-3" key={index}>
                <div className="col">
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={fullName}
                      name="fullName"
                      className="txtForm-1"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={email}
                      name="email"
                      className="txtForm-1"
                      placeholder="Email Id"
                    />
                    <select
                      name="role"
                      value={role}
                      onChange={(evnt) => handleChange(index, evnt)}
                    >
                      <option value="CEO">CEO</option>
                      <option value="CTO">CTO</option>
                      <option value="COO">COO</option>
                    </select>
                    <button className="btn" onClick="">
                      Invite
                    </button>
                  </div>
                </div>
                <div className="col">
                  {inputFields.length !== 0 ? (
                    <button className="btn" onClick={removeInputFields}>
                      x
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
          <div className="row">
            <div className="col-sm-12">
              <button className="btn " onClick={addInputField}>
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default AddRemoveInputField;
