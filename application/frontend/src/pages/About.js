import React from 'react';
import '../assets/css/about_individual.css';
// Images
import Rajdeep from '../assets/img/about/rajdeep/rajdeep.jpg';
import Rinay from '../assets/img/about/rinay/rinay.jpg';
import Bhavani from '../assets/img/about/bhavani/bhavani.jpg';
import Frederick from '../assets/img/about/frederick/frederick.jpg';
import German from '../assets/img/about/german/german.jpg';
import Henzon from '../assets/img/about/henzon/henzon.jpg';

const About = () => {
  return (
    <div className="">
      <header
        className="jumbotron jumbotron-fluid about-header2"
        style={{ textAlign: 'center' }}
      >
        <div className="container">
          <div className="centered disclaimer">
            <p className="text-white" style={{ fontSize: 'xx-small' }}>
              SFSU Software Engineering Project CSC 648-848 | Spring 2021 | For
              Demonstration Only
            </p>
          </div>
          <div className="centered site-heading text-white">
            <h1 className="h1-csc" style={{ fontWeight: '800', fontSize: '' }}>
              CSC 648
            </h1>
            <h3 style={{ fontWeight: '800' }}>TEAM 04</h3>
            <span className="subheading">
              <strong>San Francisco State University</strong>
              <br />
              Spring 2021
              <br />
              <br />
            </span>
          </div>
        </div>
      </header>
      <div className="container" id="about-section">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <br />
            <h1
              className="about_animate text-center"
              style={{ fontWeight: '800' }}
            >
              About
            </h1>
            <br />
            <p className="about_animate text-center about-text">
              We're Team 04 in CSC 648-848, Section 03, Spring 2021.
            </p>
            <p className="about_animate text-justify about-text">
              We're all senior undergrad or grad Computer Science majors at San
              Francisco State University. This web app serves as a capstone
              project.
              <br />
            </p>
            <p className="about_animate text-justify about-text">
              The backend is built with ExpressJS and MySQL served on an Express
              framework with NGINX, hosted on an AWS EC2 instance, with the
              frontend built with React, and Bootstrap.
              <br />
              <br />
            </p>
            <div className="about_animate d-flex justify-content-center align-items-center">
              <div className="card-group team">
                <div className="card border cardalign about-card mx-auto">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Rajdeep}
                    alt=""
                  />
                  <div className="card-body " style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontWeight: '800' }}>
                      Rajdeep
                    </h4>
                    <p className="card-text">Team Lead</p>
                    <a href="/rajdeep">
                      <button
                        className="btn more-btn stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign about-card mx-auto">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Rinay}
                    alt=""
                  />
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontWeight: '800' }}>
                      Rinay
                    </h4>
                    <p className="card-text">Backend Lead</p>
                    <a href="/rinay">
                      <button
                        className="btn more-btn stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign about-card mx-auto">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Bhavani}
                    alt=""
                  />
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontWeight: '800' }}>
                      Bhavani
                    </h4>
                    <p className="card-text">Frontend Lead</p>
                    <a href="/bhavani">
                      <button
                        className="btn more-btn stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p></p>
            <div className="about_animate d-flex justify-content-center align-items-center">
              <div className="card-group team">
                <div className="card border cardalign about-card mx-auto">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Frederick}
                    alt=""
                  />
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontWeight: '800' }}>
                      Frederick
                    </h4>
                    <p className="card-text">GitHub Master</p>
                    <a href="/frederick">
                      <button
                        className="btn more-btn stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign about-card mx-auto">
                  <img
                    className="card-img-top w-100 d-block"
                    src={German}
                    alt=""
                  />
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontWeight: '800' }}>
                      German
                    </h4>
                    <p className="card-text">Frontend Team</p>
                    <a href="/german">
                      <button
                        className="btn more-btn stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
                <div className="card border cardalign about-card mx-auto">
                  <img
                    className="card-img-top w-100 d-block"
                    src={Henzon}
                    alt=""
                  />
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ fontWeight: '800' }}>
                      Henzon
                    </h4>
                    <p className="card-text">Backend Team</p>
                    <a href="/henzon">
                      <button
                        className="btn more-btn stretched-link"
                        type="button"
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 col-lg-8 mx-auto"
              style={{ textAlign: 'center' }}
            >
              <br />
              <p
                className="text-muted copyright"
                style={{ fontSize: 'x-small' }}
              >
                © 2021 Team 04
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
