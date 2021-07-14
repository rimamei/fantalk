import React from 'react'

const Badge = ({className, title, ...rest}) => {
    return (
        <div>
            <p className={`px-3 py-1 rounded ${className}`}>{title}</p>
        </div>
    )
}

export default Badge
