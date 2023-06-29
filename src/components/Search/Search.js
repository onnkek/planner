import React from 'react';
import './Search.sass'

const Search = (props) => {
  return (
    <>
      <div className="search-bar input-group">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Name</a></li>
          <li><a className="dropdown-item" href="#">Frequency</a></li>
        </ul>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
      </div>
    </>
  );
}

export default Search;