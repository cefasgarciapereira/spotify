import React from 'react';
import LinkList from './LinkList';
import SocialMedia from './SocialMedia';
import '../../assets/css/footer.css';
import brand from '../../assets/img/brand.png';


export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
              <img className="logo" src={brand} alt="Logo"/>
              <LinkList/>
              <SocialMedia/>
            </div>
        )
    }
}
