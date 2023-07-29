import * as React from 'react';

import i18next from 'i18next';

import './Styles/PressureSwitch.scss';

interface Props {
    pressure: boolean
}

const PressureSwitch = (props:Props) => {

    const { pressure } = props;
    const {t} = i18next;

    const alertClass = pressure ? "alert" : "";

    return (
        <div className="pressure">
            <div className={`ok ${alertClass}`}>

            </div>
            <div className={`info ${alertClass}`}>
                {t('process.pressure')} max
            </div>
        </div>
    )
};

export default PressureSwitch;