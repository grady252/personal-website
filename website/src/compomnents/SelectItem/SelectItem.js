import React from 'react'
import Tag from '../Tag/Tag'
import './SelectItem.css'

function SelectItem({tag}) {
  return (
    <div className='selectItem'>
        <Tag name={tag}/>
        <input className='tagCheckbox' type='checkbox'/>
    </div>
  )
}

export default SelectItem