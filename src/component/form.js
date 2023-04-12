import React from "react";
import FormInputs from "./FormInput.js";
import useFormContext from "../component/hooks/Useformcontext.js";
import "../css/form.css";
const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();
  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };
  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <FormInputs />
      <header className="form-header">
        <h2>{title[page]}</h2>
        <div className="button-container">
          <button
            type="button"
            className={`button ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>
          <button
            type="button"
            className={`button ${nextHide}`}
            onClick={handleNext}
            disabled={disableNext}
          >
            Next
          </button>
          <button
            type="submit"
            className={`button ${submitHide}`}
            disabled={!canSubmit}
          >
            Submit
          </button>
        </div>
      </header>
    </form>
  );
  return content;
};
export default Form;