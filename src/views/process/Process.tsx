import * as React from 'react';
import i18next from 'i18next';
import Devices from '../../components/process/Devices/Devices';
import Tower from '../../components/process/Tower/Tower';
import Controll from '../../components/process/Controll/Controll';
import './Process.scss';

const Process = () => {
    const {t} = i18next
    return (
        <div className='Process'>
            <h2>{t('process.Process')}</h2>
            <div className='topBar'>
                <Tower />
                <Controll />
            </div>  
            <Devices />
        </div>
    )
}

export default Process
