import React from 'react'
import SelectBox from '../SelectBox/SelectBox'
import './Controls.css'

function Controls({ projects, setProjects }) {

    const getTags = (projs) => {
        const uniqueTags = [];
        projs.forEach(p => {
            p.tags.forEach(t => {
                if (!uniqueTags.includes(t))
                    uniqueTags.push(t);
            });
        });
        return uniqueTags;
    }

    return (
        <div className='controlsContainer'>
            <input className='filterInput' type={'text'} placeholder='Filter'/>
            <SelectBox tags={getTags(projects)}/>
        </div>
    )
}

export default Controls