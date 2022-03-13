import React from 'react';
import './Title.css';

function Title ({loading}){
    return(
        <h1 className={`title ${!!loading && "title__loading"}`}>Your Tasklist</h1>
    );
}

export {Title};