import React from 'react'
import PropTypes from 'prop-types';

export default function FormNavigation({ onClick, logSelect }) {
    return (
        <div className="flex text-[1.1rem] text-athens-gray-400 font-semibold select-none">
            <h1
                className={`${logSelect ? "text-blue-500" : ""}`}
                onClick={logSelect ? () => { } : onClick}
            >
                Login
            </h1>
            <h1>/</h1>
            <h1
                className={`${!logSelect ? "text-blue-500" : ""}`}
                onClick={logSelect ? onClick : () => { }}
            >
                Register
            </h1>
        </div>
    )
}

FormNavigation.propTypes = {
    onClick: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]).isRequired,
    logSelect: PropTypes.bool.isRequired
}