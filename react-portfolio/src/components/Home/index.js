import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['s', 'r', 'a', 'e', 'l', ' ', 'N', 'o', 'n', 'a', 't', 'o']
    const jobArray = ['F', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5500)
    }, [])
 

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _7`}>e</span>
                <span className={`${letterClass} _8`}>l</span>
                <span className={`${letterClass} _9`}>l</span>
                <span className={`${letterClass} _10`}>o</span>
                <span className={`${letterClass} _11`}>,</span>
                <br />
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _13`}> </span>
                <span className={`${letterClass} _14`}>a</span>
                <span className={`${letterClass} _15`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={29} />
                </h1>
                <h2> Web Developer / Systems Analyst
                </h2>
                <Link to="/contact" className="flat-button">My Contact</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>

        
    );
}

export default Home