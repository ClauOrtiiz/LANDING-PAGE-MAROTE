import React from 'react';
// import { useState } from 'react'
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Carousel } from './components/carousel/carousel';

import './App.css'

export default function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <Carousel />
                {/* <About />
                <Project />
                <Experience />
                <Contact />
              <Footer /> */}
            </main>

        </>
    )
}