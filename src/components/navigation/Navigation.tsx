import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import {ReactComponent as ProcessImg} from '../../assets/svg/process.svg';
import {ReactComponent as ParamsImg} from '../../assets/svg/parameters.svg';
import {ReactComponent as CoolingImg} from '../../assets/svg/cooling.svg';
import {ReactComponent as DataImg} from '../../assets/svg/data.svg';
import {ReactComponent as ErrorImg} from '../../assets/svg/error.svg';


import './Navigation.scss';

const Navigation = () => {

    const [active, setActive] = useState<number>(0);
    const {t} = i18next;

    return (
        <div className='navigation'>
            <ul>
                <li className={active === 1 ? 'active' : undefined}> 
                    <Link to={'/'} onClick={() => setActive(1)}><ProcessImg/>{t('navigation.process')}</Link>
                </li>
                <li className={active === 2 ? 'active' : undefined}>
                    <Link to={'/params'} onClick={() => setActive(2)}><ParamsImg/>{t('navigation.parameters')}</Link>
                </li>
                <li className={active === 3 ? 'active' : undefined}>
                    <Link to={'/cooling'} onClick={() => setActive(3)}><CoolingImg/>{t('navigation.cooling')}</Link>
                </li>
                <li className={active === 4 ? 'active' : undefined}>
                    <Link to={'/data'} onClick={() => setActive(4)}><DataImg/>{t('navigation.data')}</Link>
                </li>
                <li className={active === 5 ? 'active' : undefined}>
                    <Link to={'/errors'} onClick={() => setActive(5)}><ErrorImg/>{t('navigation.errors')}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;