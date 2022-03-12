import React from 'react';
import './MotivationalMessage.css';

function MotivationalMessage ({motivation, randomMessage, setRandomMessage}){

        React.useEffect(() => {
            setRandomMessage(motivation[Math.floor(Math.random()*motivation.length)]);
            
          }, []);
    

      return(
        <h2 className='motivation'>{randomMessage}</h2>
    );
    
}

export {MotivationalMessage};