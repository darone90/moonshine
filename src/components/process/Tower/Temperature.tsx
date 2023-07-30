import * as React from 'react';

import Manometer from '../../common/manometer/Manometer';

import './Styles/Temperature.scss';

const Temperature = () => {
    return (
        <div className="temp">
            <div className="dot" />
            <div className="line" />
            <div className="manometer">
                <div className="manometer_temp">
                    <Manometer degree={22}/>
                </div>
            </div>
        </div>
    )
};

export default Temperature;