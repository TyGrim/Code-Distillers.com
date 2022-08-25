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
        <h1>Trusted by Industry Leaders</h1>
      </div>
      <Marquee gradient={false} speed={60} play pauseOnHover={true}>
        <img src={MGM} alt="MGM Resorts" />
        <img src={Cosmo} alt="MGM Resorts" />
        <img src={RedRock} alt="MGM Resorts" />
        <img src={Station} alt="MGM Resorts" />
        <img src={Venitian} alt="MGM Resorts" />
      </Marquee>
      <Marquee
        gradient={false}
        play
        speed={60}
        pauseOnHover={true}
        direction="right"
      >
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
