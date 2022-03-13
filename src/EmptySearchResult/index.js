import React from 'react';
import './EmptySearchResult.css';

function EmptySearchResult({searchText}){
    return(
        <p className="empty__search">There are no results for {searchText}</p>
    )
}

export {EmptySearchResult};