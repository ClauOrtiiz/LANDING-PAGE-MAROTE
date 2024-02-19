import React from "react";

export const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">¡Diviértete, es tu fiesta! </h1>
            {/* <h3 className="home__subtitle">Senior Software Engineer</h3> */}
            <br />
            <div className="home__container-button">
                <a href="#contact" className="button button-home button--flex">
                    Cotiza aquí
                    <i className="uil uil-envelope-edit"></i>
                </a>
            </div>
            {/* <Social /> */}
        </div>
    )
}