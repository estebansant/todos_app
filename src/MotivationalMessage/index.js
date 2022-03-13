import React from 'react';
import './MotivationalMessage.css';

function MotivationalMessage ({motivation, randomMessage, setRandomMessage, loading}){

        React.useEffect(() => {
            setRandomMessage(motivation[Math.floor(Math.random()*motivation.length)]);
            
          }, []);
    

      return(
        <h2 className={`motivation ${!!loading && "motivation__loading"}`}>{randomMessage}</h2>
    );
    
}

export {MotivationalMessage};