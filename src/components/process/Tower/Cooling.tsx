import * as React from 'react';
import i18next from 'i18next';

import Circuit from './Circuit';

import './Styles/Cooling.scss';

const Cooling = () => {

    const {t} = i18next;

    return (
        <div className="cooling">
            <h3>{t('process.cooling')}</h3>
            <Circuit circuitName={t('process.coldFingers')}/>
            <Circuit circuitName={t('process.cooler')}/>
        </div>
    )
};

export default Cooling;