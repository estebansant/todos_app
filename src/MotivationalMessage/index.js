import React from 'react';
import './MotivationalMessage.css';
import {TodoContext} from '../TodoContext';

function MotivationalMessage (){

    const {motivation} = React.useContext(TodoContext);

    const {randomMessage, setRandomMessage} = React.useContext(TodoContext);

        React.useEffect(() => {
            setRandomMessage(motivation[Math.floor(Math.random()*motivation.length)]);
            
          }, []);
    

      return(
        <h2 className='motivation'>{randomMessage}</h2>
    );
    
}

export {MotivationalMessage};