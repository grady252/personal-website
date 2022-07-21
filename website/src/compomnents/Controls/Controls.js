import React from 'react'
import SelectBox from '../SelectBox/SelectBox'
import './Controls.css'

function Controls({ projects, selectedTags, setTags, setFilter }) {

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
            <input className='filterInput' type={'text'} placeholder='Filter' onChange={e => setFilter(e.target.value)} />
            <SelectBox tags={getTags(projects)} selectedTags={selectedTags} setTags={setTags} />
        </div>
    )
}

export default Controls