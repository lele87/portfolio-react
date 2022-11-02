import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import Navbar from '../../components/Navbar'
import ProjectList from '../../components/ProjectList'
import { techSkills } from '../../utils/techskills'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <Navbar />
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            Hello! I'm a Full-Stack developer, I'm specialized in the creation
            of web applications through MERN, following good practices with a
            clean and scalable code and good testing
          </p>
          <p>
            I'm an active learner, trustworthy and supportive guy who really
            loves programming and practical solutions.
          </p>
          <div className="download__button--container">
            <button className="download__button">
              <a
                href="./images/resume/emanuelepanesicv.pdf"
                download="emanuelepanesicv.pdf"
              >
                GET MY RESUME
              </a>
            </button>
          </div>
        </div>
        <div className="skills--container">
          <h2 className="skills--text">Tech Skills</h2>
          <div className="skills--icons">
            {techSkills.map((skill, index) => {
              return (
                <>
                  <div className="skill--container">
                    <img
                      key={skill}
                      src={`./images/techskills/${skill}.svg`}
                      alt={`${skill} logo`}
                    />
                    <h6>{skill.charAt(0).toUpperCase() + skill.slice(1)}</h6>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        <div className="projects--container">
          <div>
            <h2 className="projects--title">My Recent Works</h2>
          </div>
          <ProjectList />
        </div>
      </div>
    </>
  )
}

export default About
