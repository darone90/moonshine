import * as React from 'react';

import './Styles/Circuit.scss';

interface Props {
    isOn?: boolean;
    circuitName: string;
}

const Circuit = (props:Props) => {

    const {isOn, circuitName} = props;

    const onClassName = isOn ? 'on' : "off";

    return (
        <div className={`circuit ${circuitName}`}>
            <div className="info">
                {circuitName}
            </div>
            <div className={`work ${onClassName}`} />
            <div className={`status ${onClassName}`}>
                {isOn ? "Praca" : "Stop"}
            </div>
        </div>
    )
};

export default Circuit;