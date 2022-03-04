import React from 'react';
import './TodoSearch.css';

function TodoSearch (){
    let onSearchValueChange = (event) =>{
        console.log(event.target.value);
    };

    return(
        <input
            placeholder="search"
            className='search__bar'
            onChange={onSearchValueChange}
            />
    );
}

export {TodoSearch};