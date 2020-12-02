import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
