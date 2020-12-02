import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li>
        <div className="text-center">
          <h5>{props.title}</h5>
          <div class="buttons">
              <button onclick="window.location.href='{props.link}';">View</button>
              <button type="button" id="save">Save</button>
          </div>    
          <p>Written by: {props.authors}</p>
          <div>
              <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
              <span>{props.description}</span>
          </div>
        </div>
        </li>
    </ul>
  );
}

export default SearchResults;
