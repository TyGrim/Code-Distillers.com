import './hero.scss'
import Marquee from 'react-fast-marquee'
import MGM from '../../../../src/assets/companies/MGM.png'
import Cosmo from '../../../../src/assets/companies/Cosmopolitan.png'
import RedRock from '../../../../src/assets/companies/Red_Rock.png'
import Station from '../../../../src/assets/companies/Station.png'
import Venitian from '../../../../src/assets/companies/Ventian.png'

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="hero-title">
        <h1>Chosen by industry leaders like...</h1>
      </div>
      <Marquee speed={60} play pauseOnHover={true}>
        <img src={MGM} alt="MGM Resorts" />
        <img src={Cosmo} alt="MGM Resorts" />
        <img src={RedRock} alt="MGM Resorts" />
        <img src={Station} alt="MGM Resorts" />
        <img src={Venitian} alt="MGM Resorts" />
      </Marquee>
      <Marquee speed={60} direction="right">
        <img src={RedRock} alt="MGM Resorts" />
        <img src={Station} alt="MGM Resorts" />
        <img src={Venitian} alt="MGM Resorts" />
        <img src={Cosmo} alt="MGM Resorts" />
        <img src={MGM} alt="MGM Resorts" />
      </Marquee>
    </div>
  )
}

export default Hero
