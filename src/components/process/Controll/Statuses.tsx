import * as React from 'react';

import StatusSwitch from './StatusSwitch';

import './Styles/Statuses.scss';

interface Props {
    tankLevel: boolean;
    waterLevel: boolean;
    pressure: boolean;
}
 
const Statuses = (props:Props) => {

    const {tankLevel, waterLevel, pressure} = props;

    return ( 
        <div className="statuses">
            <StatusSwitch name='Poziom zbiornik' isOn={tankLevel}/>
            <StatusSwitch name='Poziom chłodzenie' isOn={waterLevel}/>
            <StatusSwitch name='Ciśnienie max' isOn={pressure}/>
        </div>
    );
}
 
export default Statuses ;