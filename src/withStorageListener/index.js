import React from 'react';

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {

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
            props.synchronize();
            setStorageChange(false);
        }

        return(
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
                
            />
        )
    }
}

export {withStorageListener};