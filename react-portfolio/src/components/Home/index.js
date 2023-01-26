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
    const jobArray = ['D', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r', ' ', 'F', 'r', 'o', 'n', 't', '-', 'E', 'n', 'd', '.']
    
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
                <span className={letterClass}>O</span>
                <span className={`${letterClass} _7`}>l</span>
                <span className={`${letterClass} _8`}>á</span>
                <span className={`${letterClass} _8`}>,</span>
                <br />
                <span className={`${letterClass} _9`}>E</span>
                <span className={`${letterClass} _10`}>u</span>
                <span className={`${letterClass} _11`}> </span>
                <span className={`${letterClass} _12`}>s</span>
                <span className={`${letterClass} _13`}>o</span>
                <span className={`${letterClass} _14`}>u</span>
                <span className={`${letterClass} _15`}></span>
                <span className={`${letterClass} _16`}>o</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={29} />
                </h1>
                <h2> Desenvolvedor Web / Analista de Sistemas
                </h2>
                <Link to="/contact" className="flat-button">MEU CONTATO</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>

        
    );
}

export default Home