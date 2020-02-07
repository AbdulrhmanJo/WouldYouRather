import React from 'react'

const Option = (props) => {
    const { id, option, optionText,stateOption} = props
    return (
        <label>
            <input 
                type='radio' 
                name={id}  
                value={option}
                checked={stateOption === option}
                onChange={(event)=>props.handleUserchoice(event)}
            />
                {optionText}
        </label>
    )
}

export default Option