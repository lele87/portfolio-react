import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'
import Navbar from '../../components/Navbar'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'E',
    'm',
    'a',
    'n',
    'u',
    'e',
    'l',
    'e',
    '',
    'P',
    'a',
    'n',
    'e',
    's',
    'i',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <Navbar />
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={22}
          />
        </h1>
        <h2>Full-Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
