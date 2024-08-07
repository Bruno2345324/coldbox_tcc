// src/Hero.js
import React from 'react';
import './landing.css';

const Hero = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Soluções</a></li>
                        <li><a href="#">Recursos</a></li>
                        <li><a href="#">Aplicativo</a></li>
                        <li><a href="#">SAC</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="content">
                        <img src="logo.png" alt="ColdBox Logo" />
                        <h1>Garanta sua <span>Eficiência Operacional</span> e monitore em tempo real a temperatura de seus equipamentos</h1>
                        <p>Fale com um de nossos consultores e agende uma Visita Técnica</p>
                        <button>Tenho Interesse</button>
                    </div>
                    <div className="image">
                        <img src="phone.png" alt="ColdBox App" />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Hero;
