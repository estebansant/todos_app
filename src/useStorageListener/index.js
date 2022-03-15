import React from 'react';

function  useStorageListener(synchronize) {
  
  React.useEffect(() => {
          const onChange = (change) => {
            if (change.key === 'TODOS_V1') {
              console.log('changes were made in TODOS_V1');
              setStorageChange(true);
            }
          };
    
          window.addEventListener("storage", onChange);
    
          return () => {
            window.removeEventListener("storage", onChange);
          };
        }, []);

      const [storageChange, setStorageChange] = React.useState(false);

      const toggleShow = () => {
          synchronize();
          setStorageChange(false);
      }

      return{
        show: storageChange,
        toggleShow: toggleShow,
      }
}

export {useStorageListener};