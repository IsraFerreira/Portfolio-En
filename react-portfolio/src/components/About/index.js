import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp, faReact, faCss3, faHtml5, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
                        idx={15}
                    />
                </h1>
                <p>Sou um desenvolvedor Front-end dedicado, procurando um papel numa empresa de TI com a oportunidade de trabalhar com as tecnologias mais recentes em projetos desafiadores e diversos.</p>
                <p>Sou uma pessoa tranquila e confiante, sou naturalmente curioso e estou sempre buscando aprimorar minhas habilidades e melhorar dentro e fora do ambiente profisisonal.</p>
                <p>Se eu fosse me definir em uma palavra, eu diria que sou alguém "família", adoro jogos e filmes/séries, entusiasta em design gráfico (e também back-end) e obcecado por tecnologia.</p>
            </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPhp} color="#787CB5" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About