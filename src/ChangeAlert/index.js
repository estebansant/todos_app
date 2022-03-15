import React from 'react';
import './ChangeAlert.css';
import { withStorageListener } from '../withStorageListener';

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div className="change__background">
                <div className="change__container">
                    <p className="change__container--text">It looks like you modified your TODOs in another tab or window. <br/><br/> Do you want to synchronize all your TODOs?</p>
                    <button
                        className="change__container--button"
                        onClick={() => toggleShow(false)}
                    >
                        Reload information
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
    
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener};