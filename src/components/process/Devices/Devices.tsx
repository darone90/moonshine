import * as React from 'react';

import ParamShow from './ParamsShow';
import Tank from './Tank';
import Heater from './Heater';
import LevelSwitch from './LevelSwitch';
import PressureSwitch from './PressureSwitch';

import i18next from 'i18next';

import './Styles/Devices.scss';

const Devices = () => {

    const {t} = i18next;

    return (
        <div className="rectificator">
            <Tank/>
            <Heater className='higher' power='2,0'/>
            <Heater className='lower' power='1,5'/>
            <LevelSwitch className='higher'switchName={t('process.levelHigh')}/>
            <LevelSwitch className='lower'switchName={t('process.levelLow')}/>
            <ParamShow />
            <PressureSwitch pressure={false}/>
        </div>
    )
}

export default Devices