import React from 'react'
import '../../assets/css/link-list.css';


export default class LinkList extends React.Component {

    render() {
        return (
            <div className="list-wrapper">
              <ul>
                <li className="list-title">Empresa</li>
                <li className="list-link">Sobre</li>
                <li className="list-link">Empregos</li>
                <li className="list-link">For the Record</li>
              </ul>

              <ul>
                <li className="list-title">Comunidades</li>
                <li className="list-link">Para Artistas</li>
                <li className="list-link">Desenvolvedores</li>
                <li className="list-link">Marcas</li>
                <li className="list-link">Investidores</li>
                <li className="list-link">Fornecedores</li>
              </ul>

              <ul>
                <li className="list-title">Links Úteis</li>
                <li className="list-link">Ajuda</li>
                <li className="list-link">Player da Web</li>
              </ul>
            </div>
        )
    }
}
