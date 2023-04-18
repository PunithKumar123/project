import React, { useState } from "react";
import "../css/addremove.css";

function AddRemoveInputField() {
  const [formData, setFormData] = useState([
    {
      fullName: "",
      email: "",
      role: "",
    },
  ]);

  const addInputField = () => {
    setFormData([
      ...formData,
      {
        fullName: "",
        email: "",
        role: "",
      },
    ]);
  };

  const removeInputField = (index) => {
    const rows = [...formData];
    rows.splice(index, 1);
    setFormData(rows);
  };

  const handleInputChange = (event, index, key) => {
    const value = event.target.value;
    setFormData(prevState => {
      const newFormData = [...prevState];
      newFormData[index][key] = value;
      return newFormData;
    });
  };

  return (
    <div className="add-info-container">
      {formData.map((form, index) => (
        <div key={index}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  onChange={(event) => handleInputChange(event, index, "fullName")}
                  value={form.fullName}
                  name="fullName"
                  className="txtForm-1"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  onChange={(event) => handleInputChange(event, index, "email")}
                  value={form.email}
                  name="email"
                  className="txtForm-1"
                  placeholder="Email Id"
                />
                <select
                  name="role"
                  value={form.role}
                  onChange={(event) => handleInputChange(event, index, "role")}
                >
                  <option value="CEO">CEO</option>
                  <option value="CTO">CTO</option>
                  <option value="COO">COO</option>
                </select>
                {formData.length > 1 && (
                  <button className="btn" onClick={() => removeInputField(index)}>
                    X
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-sm-12">
          <button className="btn" onClick={addInputField}>
            Add New
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRemoveInputField;
