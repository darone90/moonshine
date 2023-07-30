import * as React from 'react';

import { Size, Status } from '../../common/button/Button';
import Button from '../../common/button/Button';
import Statuses from './Statuses';

import i18next from 'i18next';

import './Styles/Controll.scss';

const Controll = () => {

    const {t} = i18next;

    const handControll = false;
    const status = 'work'

    return (
        <div className="controll">
            <h2>Sterowanie</h2>
            <Button title='Start' size={Size.big} status={Status.ok}  />
            <Button title='Stop' size={Size.big} status={Status.ok} />
            <Button title={t('process.handControll')} size={Size.big} status={Status.ok} />
            <div className="controll_panel">
                {
                    handControll
                        ? null
                        : <Statuses tankLevel={true} waterLevel={true} pressure={true} />
                }           
            </div>
            <div className="controll_status">
                <div className='title'>{t('process.device')}: </div>
                <div className={`device ${status}`} />
                <div className="info">{t('process.'+status)}</div>
            </div>
        </div>
    )
};

export default Controll;