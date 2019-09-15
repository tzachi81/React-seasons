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
    const icon = season === 'summer'? {name:'sun', color: 'orange'} : {name: 'snowflake', color: 'cyan'};

    return <div>
        <i style={{color:icon.color}} className={`${icon.name} icon`}></i>
        <h1>{text}</h1>
        <i style={{color:icon.color}} className={`${icon.name} icon`}></i>
        </div>
}

export default SeasonDisplay;