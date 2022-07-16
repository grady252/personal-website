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
              <IoMail/>
              <p>Email</p>
            </div>
            <div onClick={linkedIn}>
              <IoLogoLinkedin/>
              <p>LinkedIn</p>
            </div>
            <div onClick={github}>
              <IoLogoGithub/>
              <p>Github</p>
            </div>
          </div>

          <h1>Education</h1>

          <h1>Skills</h1>

          <h1>Work Experience</h1>
        </div>
      </div>
    </div>
  )
}

export default Home