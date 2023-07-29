import * as React from 'react';
import i18next from 'i18next';

import './Styles/Heater.scss';

interface Props {
    power: string;
    isOn?: boolean;
    className: string;
}

const Heater = (props: Props) => {
    
    const {t} = i18next
    const { power, isOn, className } = props;

    const heaterOnClass = isOn ? "on" : "off";

    return (
        <div className={`wrapper ${className}`}>
            <div className={`heater ${heaterOnClass}`} />
            <div className="power">
                {power} kW
            </div>
            <div className={`work ${heaterOnClass}`} />
            <div className={`info ${heaterOnClass}`}>
                {isOn ? t('process.on') : t('process.off')}
            </div>
        </div>
        
    )
}

export default Heater