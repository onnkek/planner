import React from 'react';
import './Spinner.sass'

const Spinner = (props) => {
    const size = props.small ? "spinner-small" : "spinner-big";
    return (
        <div className='spinner'>
            <div className={`${size} spinner-border text-primary`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;