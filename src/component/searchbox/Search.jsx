import React from 'react';
import "./Search.css";

const Search = ({ onInputChange }) =>
{
    return (
        <div className="search-box">
            <input onChange={ (event) => onInputChange(event.target.value) } placeholder="Type keywords" type="text" className="search-input" />
        </div>
    );

};

export default Search;
