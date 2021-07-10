import { useState, useEffect } from 'react';
import './Rgtframe.scss';
import { formatDate } from '../../utils/helper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentAlt,
    faUserFriends,
   
    faCalculator,
} from "@fortawesome/free-solid-svg-icons";


export const Rgtframe = ({
    isMessenger,
    setIsMessenger,
    messageAlert,
    setMessageAlert,
    setIsCalculatorPage,
    isCalculatorPage,
}) => {
    let interval = null;
    const [currentTime, setCurrentTime] = useState(() => {
        return formatDate();
    });

    useEffect(() => {
        interval = setInterval(() => setCurrentTime(formatDate()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="frame-header">
            
            <div
                className="header-items icon-block"
                onClick={() => {
                    setIsMessenger(true);
                    setMessageAlert({});
                }}
            >
                <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                {!isMessenger && messageAlert.alert && (
                    <span className="alert-circle-icon"></span>
                )}
            </div>
            <div className="header-items date-block">{currentTime}</div>
            <div className="header-items icon-block"
            onClick={() => {
                setIsCalculatorPage(true);
                    
                }}
            >
                <FontAwesomeIcon className="icon " icon={faCalculator} />
            </div>
        </div>
    );
};