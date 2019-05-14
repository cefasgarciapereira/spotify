import React from 'react'
import '../assets/css/footer.css';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
              <div className="lists-wrapper">
                <ul>
                  <li>Company</li>
                  <li>About</li>
                  <li>Jobs</li>
                  <li>For the Record</li>
                </ul>

                <ul>
                  <li>Communities</li>
                  <li>For Artists</li>
                  <li>Developers</li>
                  <li>Brands</li>
                  <li>Investors</li>
                  <li>Vendors</li>
                </ul>

                <ul>
                  <li>Useful Links</li>
                  <li>Help</li>
                  <li>Gift</li>
                  <li>Web Player</li>
                </ul>
              </div>

              <ul>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
        )
    }
}
