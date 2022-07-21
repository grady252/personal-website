import React from 'react'
import SelectItem from '../SelectItem/SelectItem'
import './SelectBox.css'

function SelectBox({ tags, selectedTags, setTags }) {
    return (
        <div className='selectBoxContainer'>
            {tags.map(t => <SelectItem tag={t} selectedTags={selectedTags} setTags={setTags} />)}
        </div>
    )
}

export default SelectBox