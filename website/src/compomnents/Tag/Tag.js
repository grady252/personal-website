import React from 'react'
import './Tag.css'

function Tag({name}) {
  return (
    <div className={'tag tag-' + name}>{name}</div>
  )
}

export default Tag