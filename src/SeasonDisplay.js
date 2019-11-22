import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        seasonType: 'Summer',
        text:  'Let\'s hit the beach!',
        iconName: 'sun',
        iconColor: 'orange'
    },
    winter: {
        seasonType: 'Winter',
        text: 'Brr... it is chilli!',
        iconName: 'snowflake',
        iconColor: 'cyan'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {seasonType, text, iconName, iconColor} = seasonConfig[season];

    return (
        <div className ={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{seasonType}</h1>
            <h2>{text}</h2>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;