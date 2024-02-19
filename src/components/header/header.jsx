import React, { useState } from 'react';
// import IconMarote from "../../assets/marote-amarillo.png"
import "./header.css";

export const Header = () => {
    /*----------Toggle Menu--------------*/
    const [Toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            {/* <div className='icon__section'>
                <img src={IconMarote} alt="" className="icon__img" />
                <a href="index.html" className="nav__logo">LUIGI LIZARES</a>
            </div> */}
            <nav className="nav container">
                <div className='icon__section'>
                    {/* <img src={IconMarote} alt="" className="icon__img" /> */}
                    <a href="index.html" className="nav__logo">MAROTES</a>
                </div>


                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> Nosotros
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#project" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Galeria
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Cotizar
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
};

