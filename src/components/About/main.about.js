import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './main.about.scss'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'P', 'a', 'g', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue.Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
          in massa egestas mollis varius; dignissim elementum. Mollis tincidunt
          mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
          parturient habitant pharetra rutrum gravida porttitor eros feugiat.
          Mollis elit sodales taciti duis praesent id. Consequat urna vitae
          morbi nunc congue.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue.
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
          egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
          hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient
          habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
          sodales taciti duis praesent id. Consequat urna vitae morbi nunc
          congue.
        </p>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
