import React, { useContext } from 'react'
import "./Home.css"
import InputField from './InputField'
import Image from './Image'
import logo from "./google_logo.png"
import { DisplayContext } from '../contexts/DisplayContext'
import { ImagesContext } from '../contexts/ImagesContext'

export default function Home() {
    const { display, setDisplay } = useContext(DisplayContext)
    const { images, setImages } = useContext(ImagesContext)

    const createImage = (props) => {
        return <Image value={props} key={props.id} />
    }

    return (
        <div className='home' >
            <div className={display ? "initial" : "hidden"}>
                <div className="google-logo">
                    <img className='logo' src={logo} alt='Google Logo' />
                    <span className='google-images'>images</span>
                </div>
                <InputField />
            </div>
            <div className={display ? "hidden" : "after"}>
                <div className="navbar-custom shadow-sm">
                    <img id='logo' src={logo} alt='Google Logo' />
                    <InputField className='input-field' />
                </div>
                <div className="image-container">
                    {images.length && images.map(createImage)}
                </div>
            </div>
        </div>
    )
}
