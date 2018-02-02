import React from 'react'
import './CharComponent.css'

export const CharComponent = (props) => {
    return(
        <div className="CharComponent" onClick={props.click}>
            {props.letter}
            {props.children}
        </div>
    )
}

export default CharComponent