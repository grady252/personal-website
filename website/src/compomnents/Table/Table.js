import React from 'react'
import TableRow from '../TableRow/TableRow'
import './Table.css'

function Table({ projects }) {
  return (
    <div className='tableContainer'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody> 
          {
            projects.map(p => <TableRow key={p.name} project={p}/>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table