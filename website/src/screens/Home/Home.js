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
          <p>Hi! My name is Grady, I am a software developer that is currently finishing up
            my honors year at university. My interests are Web and mobile development,
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
              including<br/>cricket, rugby and football. I am proud of my academic achievements
              gaining<br/>academic excellence in Y13.</p>
            </div>
          </div>
          <h1>Skills</h1>

          <h1>Work Experience</h1>
        </div>
      </div>
    </div>
  )
}

export default Home