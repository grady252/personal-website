import { collection, getDocs } from 'firebase/firestore';
import {firestore} from '../../firebase'
import React, { useEffect, useState } from 'react'
import './Projects.css'
import Table from '../../compomnents/Table/Table';
import Controls from '../../compomnents/Controls/Controls';

function Projects() {
  const [projects, setProjects] = useState([]);
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

  return (
    <div className='projects'>
      <div className='projectsDisplay'>
        <Controls projects={projects} setProjects={setProjects}/>
        <Table projects={projects} setProjects={setProjects}/>
      </div>
    </div>
  )
}

export default Projects