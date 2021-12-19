import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-facebook" /></a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-twitter" /></a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="#!"><i className="icon-social-github" /></a>
            </li>
          </ul>
          <p className="text-muted small mb-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
            </div>
        );
    }
}

export default Footer;