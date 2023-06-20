import React from 'react';
import './Spinner.sass'

const Spinner = (props) => {
    return (
        <div className='spinner'>
            <div className="spinner-size spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;