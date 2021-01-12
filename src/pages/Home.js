import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { crollToElemetHandler } from '../js/crollToElemetHandler';

export default function Home() {
  return (
    <section id="home-page" className="home">
      <div className="row">
        <div className="col-md-7 offset-md-1 d-flex align-items-center justify-content-center">
          <div className="greetings text-center">
            <h2>Кряжев Олег</h2>
            <h4>Frontend-разработчик</h4>
            <p>Приветствую Вас на моём сайте!</p>
            <Router>
              <ButtonGroup id="nav-buttons-home">
                <Link
                  to="/about"
                  onClick={crollToElemetHandler('about')}
                  className="btn btn-secondary mx-2"
                >
                  Навыки
                </Link>

                <Link
                  to="/portfolio"
                  onClick={crollToElemetHandler('portfolio')}
                  className="btn btn-secondary mx-2"
                >
                  Портфолио
                </Link>

                <Link
                  to="/contacts"
                  onClick={crollToElemetHandler('contacts')}
                  className="btn btn-secondary mx-2"
                >
                  Контакты
                </Link>
              </ButtonGroup>
              <Link
                to="/about"
                onClick={crollToElemetHandler('about')}
                className="next-page-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-down-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                </svg>
              </Link>
            </Router>
          </div>
        </div>
      </div>
    </section>
  );
}
