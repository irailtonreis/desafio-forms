import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {
    if(active === false) return null;
    return (
        <fieldset style={{ padding: '2rem', marginBottom: '1rem', border: '2px solid #eee' }}>
            <legend style={{ fontWeight: 'bold'}}>{pergunta}</legend>
            {options.map(option => (
                <label key={option} style={{marginBottom: '1rem', fontFamily: "monospace", display: "block"}}>
                    <input type="radio" id={id} value={option} onChange={onChange} value={option} checked={value === option} />
                        {option}
                </label>
            ))}
        </fieldset>
    )
}


export default Radio