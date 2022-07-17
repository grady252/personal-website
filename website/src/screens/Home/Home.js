import React from 'react'
import './Home.css';
import { IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

function Home() {
  const email = () => {
    window.open("mailto:grady.r.mccallum@gmail.com", '_blank')
  }

  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/grady-mccallum-3863951a4/", '_blank')
  }

  const github = () => {
    window.open("https://github.com/grady252", '_blank')
  }

  return (
    <div className='home'>
      <div className='aboutMe'>
        <div className='aboutMeText'>
          <h1>About Me</h1>
          <p>Hi! My name is Grady, I am a software developer currently finishing up
            my honours year at university. My interests are web and mobile development,
            developing on the cloud, bioinformatics and algorithims.</p>
        </div>
      </div>
      <div className='content'>
        <div className='information'>
          <h1>Socials</h1>
          <div className='socials'>
            <div onClick={email}>
              <IoMail />
              <p>Email</p>
            </div>
            <div onClick={linkedIn}>
              <IoLogoLinkedin />
              <p>LinkedIn</p>
            </div>
            <div onClick={github}>
              <IoLogoGithub />
              <p>Github</p>
            </div>
          </div>
          <h1>Education</h1>
          <div className='education'>
            <div className='uow'>
              <h2>University of Waikato - BCMS(hons)</h2>
              <h4>2020 - Present</h4>
              <p>I am currently in my 4<sup>th</sup> year of my BCMS(hons) degree
                at the University of Waikato.</p>
              <p>The academic transcript of my achievements can be found <a href='AcademicRecord.pdf'>here</a>.</p>
              <p>Some of the other achievements that I am proud of are:</p>
              <ul>
                <li>2020 - Te Ara Hou Scholarship</li>
                <li>2020 - CMS Prize for Excellence at 100 level</li>
                <li>2021 - CMS Prize for Excellence at 200 level</li>
              </ul>
            </div>
            <div className='boys'>
              <h2>Hamilton Boys High School</h2>
              <h4>2015 - 2019</h4>
              <p>I enjoyed my time at high school and was involved in many sports
                including<br />cricket, rugby and football. I am proud of my academic achievements
                gaining<br />academic excellence in Y13.</p>
            </div>
          </div>
          <h1>Skills</h1>
          <div className='skills'>
            <div className='technologies'>
              <h5>Technical Skills:</h5>
              <ul>
                <li>C#/.NET ecosystem ASP.NET</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>PHP</li>
                <li>Node</li>
                <li>React</li>
                <li>Express</li>
                <li>Bash scripting</li>
                <li>OpenCL</li>
                <li>Cuda</li>
                <li>Hadoop Map Reduce</li>
                <li>Apache Spark</li>
                <li>Docker</li>
                <li>Android Development</li>
                <li>Cloud (Azure)</li>
                <li>SQL</li>
                <li>Assembly</li>
                <li>OpenCV</li>
              </ul>
            </div>
          </div>
          <h1>Work Experience</h1>
          <div className='workExperience'>
            <div className='centrix'>
              <h2>Centrix Consulting Ltd</h2>
              <h3>SAP Support Assistant</h3>
              <h4>July 2021 - Present</h4>
              <p>In my SAP Support Assitant Role at Centrix I primarily focused on completing
                stocktake work as well as other tickets for one of their European customers.</p>
              <h3>Trainee Developer</h3>
              <h4>Febuary 2022 - Present</h4>
              <p>As a trainee developer at Centrix I have engaged in both their ABAP
                and profesional training. I have also been working on an exciting web
                based internal project for Centix.
              </p>
            </div>
            <div className='uow'>
              <h2>University of Waikato</h2>
              <h3>Lab Demonstrator</h3>
              <h4>March 2022 - Present</h4>
              <p>I helped 100 and 200 level students with their lab work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home