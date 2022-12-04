import React from 'react';

function useLocalStorage(itemName, initialValue) {
// Creating a useReducer
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { 
    synchronizedItem, 
    error, 
    loading, 
    item,
   } = state;

  // Action Creators

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = (newItem) => dispatch({ type: actionTypes.saved, payload: newItem });
  const onSync = () => dispatch({ type: actionTypes.sync });



  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);

      } catch(error) {
        onError(error);
      }
    }, 3000);
  }, [synchronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  };

  const sync =  () => {
    onSync();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sync,
  };
}

// Setting the initial state of the different states

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  synchronizedItem: true,
  item: initialValue,
});

// Creating action types to avoid mistakes or type errors

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  saved: 'SAVED',
  sync: 'SYNC',
}

// Reducer

const reducer = (state, action) => {
  switch (action.type){
    case actionTypes.error:
      return {
        ...state,
        error: true,
      }
    case actionTypes.success:
      return {
        ...state,
        loading: false,
        synchronizedItem: true,
        error: false,
        item: action.payload,
      }
    case actionTypes.saved:
      return{
        ...state,
        item: action.payload,
      }
    case actionTypes.sync:
      return{
        ...state,
        synchronizedItem: false,
        loading: true,
      }
    default:
      return{
        ...state,
      }
  }
}

export { useLocalStorage };