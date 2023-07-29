import * as React from 'react';

import './Styles/LevelSwitch.scss';

interface Props {
    level?: boolean;
    className?: string;
    switchName: string;
}

const LevelSwitch = (props: Props) => {

    const { level, className, switchName } = props;

    const levelClass = level ? 'good' : 'low';

    return (
        <div className={`switch ${className}`}>
            <div className={`arm ${levelClass}`} />
            <div className="block" />
            <div className={`work ${levelClass}`} />
            <div className="info">
                {switchName}
            </div>
        </div>
    )
}

export default LevelSwitch;