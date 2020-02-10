import React from 'react'

const Option = (props) => {
    const { id, option, optionText,stateOption} = props
    return (
        <div className="option">
            <input
                id={optionText}
                type='radio' 
                name={id}  
                value={option}
                checked={stateOption === option}
                onChange={(event)=>props.handleUserchoice(event)}
            />
            <label htmlFor={optionText}>
                {optionText}   
            </label>
        </div>
    )
}

export default Option