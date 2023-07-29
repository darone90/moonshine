import * as React from 'react';

import Manometer from '../../common/manometer/Manometer';

import './Styles/ParamsShow.scss';

const ParamShow = () => {
    return (
        <div className='paramsShow'>
            <div className="dot" />
            <div className="line" />
            <div className="manometers">
                <div className="manometers_temp">
                    <h2>Temperatura</h2>
                    <Manometer degree={20}/>
                </div>
                <div className="manometers_pres">
                    <h2>Ciśnienie</h2>
                    <Manometer degree={22}/>
                </div>
            </div>
        </div>
    )
}

export default ParamShow;