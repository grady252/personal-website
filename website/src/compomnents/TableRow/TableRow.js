import React from 'react'
import Tag from '../Tag/Tag'

function TableRow({project}) {
  return (
    <tr>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>
            {
                project.tags.map(t => <Tag key={t} name={t}/>)
            }
        </td>
        <td><a href={project.link}>Link</a></td>
    </tr>
  )
}

export default TableRow