import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext';
import {BsSearch} from 'react-icons/bs'

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
  
    return (
      <div className="search__container">
        <input
          className="search__container--bar"
          placeholder="Search"
          value={searchValue}
          onChange={onSearchValueChange}
        />
        <BsSearch className="search__container--icon"/>
      </div>
    );
  }

export {TodoSearch};