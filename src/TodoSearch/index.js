import React from 'react';
import './TodoSearch.css';
import {BsSearch} from 'react-icons/bs'

function TodoSearch({searchValue, setSearchValue, loading}) {

    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
  
    return (
      <div className={`search__container ${!!loading && "search__container--loading"}`}>
        <input
          className="search__container--bar"
          placeholder="Search"
          value={searchValue}
          onChange={onSearchValueChange}
          disabled={loading}
        />
        <BsSearch className={`search__container--icon ${!!loading && "search__container--icon__loading"}`}/>
      </div>
    );
  }

export {TodoSearch};