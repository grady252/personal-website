import { collection, getDocs } from 'firebase/firestore';
import {firestore} from '../../firebase'
import React, { useEffect, useState } from 'react'
import './Projects.css'
import Table from '../../compomnents/Table/Table';
import Controls from '../../compomnents/Controls/Controls';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("");

  const ref = collection(firestore, "projects");

  const getData = async () => {
    const query = await getDocs(ref);
    const data = []
    query.forEach((doc => {
      data.push(doc.data());
    }))
    setProjects(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const filterProjects = (ps) => {
    let filteredProjects;
    filteredProjects = JSON.parse(JSON.stringify(ps));
    if (filter.length !== 0)
      filteredProjects = filteredProjects.filter(p => p.name.includes(filter) || p.description.includes(filter));
    if (tags.length !== 0)
      filteredProjects = filteredProjects.filter(p => p.tags.includes(tags[0]));
    return filteredProjects;
  }

  return (
    <div className='projects'>
      <div className='projectsDisplay'>
        <Controls projects={filterProjects(projects)} selectedTags={tags} setTags={setTags} setFilter={setFilter} />
        <Table projects={filterProjects(projects)}/>
      </div>
    </div>
  )
}

export default Projects