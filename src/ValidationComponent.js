import React from 'react'

export const ValidationComponent = (props) => {
    return(
        <div>
            <p>{props.length}</p>
            {props.children}
        </div>
    )
}

export default ValidationComponent