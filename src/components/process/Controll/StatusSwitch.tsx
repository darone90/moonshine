import * as React from 'react';

import './Styles/StatusSwitch.scss';

interface Props {
    isOn: boolean;
    name: string;
}
 
const StatusSwitch = (props: Props) => {

    const {isOn, name} = props;

    const isOnClass = isOn ? "on" : "off";

    return (
        <div className="switchStatus">
            <div className='title'>{name}</div>
            <div className={`work ${isOnClass}`} />
        </div>
    );
}
 
export default StatusSwitch ;