import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_ncyhzk8', 'template_rzpwmkd', form.current, 'DfCVnp4A9fBeJJEMg')
            .then(
                () => {
                    alert('Mensagem Enviada!')
                    window.location.reload(true)
                },
                () => {
                    alert('Falha ao enviar a mensagem, por favor tente novamente')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 't', 'e', '-', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Estou interessado em projetos que podem agregar em minhas experiências / portfólio  - especialmente em projetos ambiciosos ou grandes. Porém, se você tiver quaisquer outros pedidos ou perguntas, não hesite em me contatar usando o formulário abaixo também.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Nome" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Assunto"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Mensagem"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="ENVIAR" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>


                <div id="containerCofee">
                    <div class="steam" id="steam1"> </div>
                    <div class="steam" id="steam2"> </div>
                    <div class="steam" id="steam3"> </div>
                    <div class="steam" id="steam4"> </div>

                    <div id="cup">
                        <div id="cup-body">
                            <div id="cup-shade"></div>
                        </div>
                        <div id="cup-handle"></div>
                    </div>

                    <div id="saucer"></div>

                    <div id="shadow"></div>
                </div>




                <div className="info-map">
                    Israel Silva,
                    <br />
                    Méier,
                    <br />
                    Brasil <br />
                    <br />
                    <span>israel.fnds@hotmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-22.903696, -43.275315]} zoom={17}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {/* <Marker position={[-22.903696, -43.275315]}>
                            <Popup>Israel mora aqui, venha para tomar um café :) </Popup>
                        </Marker> */}
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />

        </>
    )
}

export default Contact