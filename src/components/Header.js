import React from 'react'
import '../assets/css/header.css';
import brand from '../assets/img/brand.png';


export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
              <ul className="navbar">
                <li><img className="logo" src={brand} alt="Logo"/></li>
                <li><a className="link" href="">  Premium </a></li>
                <li><a className="link" href="">  Ajuda   </a></li>
                <li><a className="link" href="">  Baixar   </a></li>
                <li><a className="login"href="">  Inscrever-se   </a></li>
                <li><a className="login"href="">  Entrar   </a></li>

              </ul>
            </div>
        )
    }
}
