import React from 'react';

function TodoList(props){

    return(
        <section className="TodoList__container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

            {props.searchedTodos.map(props.children)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};