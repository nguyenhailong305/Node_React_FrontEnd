import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <div>
        <section className="content-section bg-primary text-white text-center" id="services">
          <div className="container px-4 px-lg-5">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">Services</h3>
              <h2 className="mb-5">What We Offer</h2>
            </div>
            <div className="row gx-4 gx-lg-5">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-screen-smartphone" /></span>
                <h4><strong>Responsive</strong></h4>
                <p className="text-faded mb-0">Looks great on any screen size!</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-pencil" /></span>
                <h4><strong>Redesigned</strong></h4>
                <p className="text-faded mb-0">Freshly redesigned for Bootstrap 5.</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-like" /></span>
                <h4><strong>Favorited</strong></h4>
                <p className="text-faded mb-0">
                  Millions of users
                  <i className="fas fa-heart" />
                  Start Bootstrap!
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-mustache" /></span>
                <h4><strong>Question</strong></h4>
                <p className="text-faded mb-0">I mustache you a question...</p>
              </div>
            </div>
          </div>
        </section>
        {/* Callout*/}
        <section className="callout">
          <div className="container px-4 px-lg-5 text-center">
            <h2 className="mx-auto mb-5">
              Welcome to
              <em>your</em>
              next website!
            </h2>
            <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/theme/stylish-portfolio/">Download Now!</a>
          </div>
        </section>
      </div>
        );
    }
}

export default Service;