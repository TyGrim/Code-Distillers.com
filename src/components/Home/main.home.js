import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo/main.logo'
import './main.home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'C',
    'o',
    'd',
    'e',
    '-',
    'D',
    'i',
    's',
    't',
    'l',
    'l',
    'e',
    'r',
    's',
  ]
  const jobArray = [
    'A',
    'V',
    ' ',
    'I',
    'n',
    'd',
    'u',
    's',
    't',
    'r',
    'y',
    ' ',
    'P',
    'r',
    'o',
    'g',
    'a',
    'm',
    'm',
    'i',
    'n',
    'g',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>W</span>
            <span className={`${letterClass} _12`}>e </span>
            <span> </span>
            <span className={`${letterClass} _13`}>A</span>
            <span className={`${letterClass} _14`}>r</span>
            <span className={`${letterClass} _15`}>e </span>
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={10}
            />
          </h1>

          <div className="job">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={14}
            />
          </div>
          <h2>AV / Crestron / Automation / Programming</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home