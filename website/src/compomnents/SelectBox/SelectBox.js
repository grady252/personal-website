import React from 'react'
import SelectItem from '../SelectItem/SelectItem'
import './SelectBox.css'

function SelectBox({ tags }) {
    return (
        <div className='selectBoxContainer'>
            {tags.map(t => <SelectItem tag={t}/>)}
        </div>
    )
}

export default SelectBox