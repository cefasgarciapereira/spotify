import React from 'react'
import '../assets/css/hero.css';

export default class Hero extends React.Component {

    render() {
        return (
            <div className="hero">
              <h1 className="title">Música para todos.</h1>
              <h2 className="sub-title">Milhões de músicas à sua escolha. E nem precisa de cartão de crédito.</h2>
              <button className="round-button">Obtenha o Spotify Free</button>
            </div>
        )
    }
}
