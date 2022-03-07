import React from 'react';

function useLocalStorage (itemName, initialValue) {

    let [error, setError] = React.useState(false);
    let [loading, setLoading] = React.useState(true);
    let [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          let localStorageItem = localStorage.getItem('itemName');
          let parsedItem; 
          
          if(!localStorageItem){
            localStorage.setItem('itemName', JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem (parsedItem);
          setLoading (false);
        } catch(error){
          setError(error);
        }
        }, 1000);
    }, [])
  
  
    let saveItem = (newItem) =>{
      try{
        let stringedItem = JSON.stringify(newItem);
        localStorage.setItem('itemName', stringedItem);
        setItem(newItem);
      } catch(error){
        setError(error);
      }
      
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

export {useLocalStorage};