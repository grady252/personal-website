import React, { useState } from 'react'
import Tag from '../Tag/Tag'
import './SelectItem.css'

function SelectItem({tag, selectedTags, setTags}) {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked);
    if (checked)
      setTags([...selectedTags, tag]);
    else
      setTags(selectedTags.filter(t => t != tag));
  }

  return (
    <div className='selectItem'>
        <input className='tagCheckbox' type='checkbox' checked={checked} onChange={handleCheck} />
        <Tag name={tag}/>       
    </div>
  )
}

export default SelectItem