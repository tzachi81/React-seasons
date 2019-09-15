import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'summer'? 'Let\'s hit the beach' : 'Brr. it is chilli';
    // <i class="sun icon"></i>
    // <i class="snowflake icon"></i>
    const icon = season === 'summer'? 'sun': 'snowflake';
    return <div>
        <i className={`${icon} icon`}></i>
        <h1>{text}</h1>
        <i className={`${icon} icon`}></i>
        </div>
}

export default SeasonDisplay;