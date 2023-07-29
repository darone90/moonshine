import moduleName from 'module';

import Line from './Line';
import Temperature from './Temperature';

import './Styles/Tower.scss'

const Tower = () => {
    return (
        <div className='tower'>
            <Line />
            <Temperature />
        </div>
    )
};

export default Tower;