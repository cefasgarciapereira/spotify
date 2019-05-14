import React from 'react'
import '../../assets/css/social-media.css';


export default class LinkList extends React.Component {

    render() {
        return (
          <ul className="social-media">
            <li className="item"><i class="fab fa-instagram"></i></li>
            <li className="item"><i class="fab fa-twitter"></i></li>
            <li className="item"><i class="fab fa-facebook-f"></i></li>
          </ul>
        )
    }
}
