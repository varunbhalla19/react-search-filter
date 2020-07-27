import React from 'react';
import './SearchBar.css';

const SearchBar = props => (
    <div className="search-bar" >
        <input type="search" name="search-bar" id="s-b" onChange={props.filterList} />
    </div>
);

export {SearchBar} ;