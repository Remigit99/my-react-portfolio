import React from 'react';
import { FiDownload } from 'react-icons/fi'
import './Header.css';


const Header = () => {
    return (
        <main>

            <div className="container header__container">

                <div className="header__top">

                    <h3 className="text-light">
                        Hi, I am
                    </h3>

                    <h1>Aderemi Abiodun</h1>

                    <h3 className="text-light">
                        Frontend Developer
                    </h3>

                </div>

                <div className="download__talk">
                    <div className="download">
                        <span>
                            <FiDownload />
                            <a href="#" download ></a>
                        </span>
                    </div>
                    <div className="talk">
                        <a href="#contact">Let's Talk</a>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Header