import React from 'react';
import '../assets/css/henzon.css';
import '../assets/bootstrap/bootstrap-about.min.css';
// Images
import Profile from '../assets/img/henzon/portrait_pic.jpeg';
import Linkedin from '../assets/img/henzon/linkedin_ic.png';
import Github from '../assets/img/henzon/github_ic.png';
import Education from '../assets/img/henzon/education.png';
import Mail from '../assets/img/henzon/mail.png';
import RainbowReef from '../assets/img/henzon/rainbowreef_game.png';
import Calculator from '../assets/img/henzon/calculator.png';
import FitApp from '../assets/img/henzon/fitapp.png';
import FitApp_pushup from '../assets/img/henzon/fitapp_pushup.png';

const Henzon = () => {
  return (
    <div class="about_me">
      <header class="container heading">
        <img
          class="rounded-circle"
          src={Profile}
          width="170"
          alt="profile_pic"
        />

        <h1 style={{ fontWeight: '600' }}>Henzon Zambrano</h1>

        <ul class="container">
          <li class="contacts_linkedin list">
            <img class="linkedin" src={Linkedin} width="30" alt="linkedin" />
            <a
              class="contacts_text list-a"
              href="https://www.linkedin.com/in/henzon-zambrano-06b116105/"
            >
              Linkedin
            </a>
          </li>
          <li class="contacts_github list">
            <img class="github" src={Github} width="30" alt="github" />
            <a class="contacts_text list-a" href="https://github.com/henzonz">
              Github
            </a>
          </li>

          <li class="contacts_mail list">
            <img class="mail" src={Mail} width="30" alt="mail" />
            <a class="contacts_text list-a" href="mailto: zhenzon26@gmail.com">
              zhenzon8991@gmail.com
            </a>
          </li>
        </ul>
      </header>

      <div class="info">
        <h2 class="header2">Education</h2>
        <img class="sfsu img-fluid" src={Education} width="500" alt="sfsu" />

        <h2 class="header2">Projects</h2>
        <ul>
          <li class="list">
            <a href="https://github.com/henzonz/Super-Rainbow-Reef-Game">
              Super Rainbow Reef Game{' '}
            </a>
            <br></br>
            <img class="img-fluid" src={RainbowReef} width="500" alt="" />
          </li>
          <p class="project_desc">
            A simple 2-D game created using Java to practice object oriented
            programming.{' '}
          </p>
          <li class="list">
            <a href="https://github.com/henzonz/Calculator-GUI-asmt-">
              {' '}
              Calculator{' '}
            </a>
            <br></br>
            <img class="img-fluid" src={Calculator} width="500" alt="" />
          </li>
          <p class="project_desc">
            A simple calculator GUI that properly evaluates mathematical
            expressions by following the correct order of operations.{' '}
          </p>
          <li class="list">
            <a href="https://sites.google.com/d/1fT0q9McLlsaqFR7TymBE8HUAwA1LUbFi/p/1jC9TGeGSuDAWNaaCqpRhbtXnWeY6OXJX/edit">
              {' '}
              Fit App{' '}
            </a>
            <br></br>
            <img class="img-fluid" src={FitApp} width="600" alt="" />
          </li>
          <p class="project_desc">
            {' '}
            A simple fitness app rep counter that utilizes the three iPhone
            sensors: proximity sensor, gyroscope and touch screen. The app is
            created using the Swift language that allow users to workout without
            having to count repetitions of the mentioned workouts.
          </p>
          <br></br>
          This is the sample product of the rep counter page for push up counter
          which utilizes the proximity sensor to count repetitions:
          <br></br>
          <img class="img-fluid" src={FitApp_pushup} width="600" alt="" />
        </ul>

        <h2 class="header2">Languages</h2>
        <ul>
          <h3>
            <i>Preferred Languages</i>
          </h3>
          <li class="list"> Java </li>
          <li class="list"> C </li>
          <li class="list"> HTML & CSS </li>
          <h3>
            <i>Basics</i>
          </h3>
          <li class="list"> Verilog </li>
          <li class="list"> Swift </li>
          <li class="list"> C++ </li>
          <li class="list">Python</li>
        </ul>
      </div>
    </div>
  );
};

export default Henzon;
