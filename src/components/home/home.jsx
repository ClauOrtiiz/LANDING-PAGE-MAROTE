import React from "react";
import "./home.css";

import { Data } from "./data";

export const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    {/* imagen logo en movimiento */}
                    {/* <div className="home__img"></div> */}
                    <Data />
                </div>
            </div>
        </section>
    )
}