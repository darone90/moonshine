import moduleName from 'module';

import Line from './Line';
import Temperature from './Temperature';
import Cooling from './Cooling';

import './Styles/Tower.scss'

const Tower = () => {
    return (
        <div className='tower'>
            <Line />
            <Temperature />
            <Cooling />
        </div>
    )
};

export default Tower;