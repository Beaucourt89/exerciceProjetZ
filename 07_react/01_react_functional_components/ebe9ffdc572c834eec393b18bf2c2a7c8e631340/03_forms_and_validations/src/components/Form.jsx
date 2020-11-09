import React from "react";
const Form = () => {
  const [firstName, setFirstName] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState(null);
  const validateFirstName = (firstName) => {
    if (firstName.includes(" ")) {
      setFirstNameError("No spaces allowed");
      setFirstName(firstName);
    } else {
      setFirstNameError(null);
      setFirstName(firstName);
    }
  };
  return (
    <form
      className="w-100"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first-name"
          aria-describedby="firstNameHelp"
          value={firstName}
          onChange={(event) => validateFirstName(event.target.value)}
        />
        {firstNameError ? (
          <small id="firstNameHelp" className="form-text text-muted">
            {firstNameError}
          </small>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;
