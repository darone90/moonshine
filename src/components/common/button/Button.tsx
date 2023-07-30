import * as React from 'react';

import './Button.scss';

export enum Size {
    "small" = "small",
    "middle" = "middle",
    "big" = "big"
}

export enum Status {
    "neutral" = 'neutral',
    "ok" = 'ok',
    "block" = 'block',
    "danger" = 'danger'
}

interface Props {
    title: string;
    func?: () => any;
    size?: Size;
    status?: Status
}

const Button = (props: Props) => {

    const { title, func, size, status } = props;

    return (
        <div className={`button ${size} ${status}`} onClick={func}>
            <button>{title}</button>
        </div>
    )
};

export default Button;