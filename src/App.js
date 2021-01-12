import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import { crollToElemetHandler } from './js/crollToElemetHandler';
import { getCoord } from './js/getCoord';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

class App extends React.Component {
  componentDidMount() {
    const navBtnHome = document.getElementById('nav-buttons-home');

    window.onscroll = function () {
      const div = document.getElementById('app-header');
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled < window.innerHeight) {
        div.className = 'container-fluid collapse';
      } else {
        div.className = 'container-fluid';
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header className="app-header collapse" id="app-header">
            <div className="container-fluid">
              <div className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand">Кряжев Олег</a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Меню
                  </button>

                  <nav className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/"
                          onClick={crollToElemetHandler('home')}
                        >
                          Начало
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/about"
                          onClick={crollToElemetHandler('about')}
                        >
                          Навыки
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/portfolio"
                          onClick={crollToElemetHandler('portfolio')}
                        >
                          Портфолио
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="/contacts"
                          onClick={crollToElemetHandler('contacts')}
                        >
                          Контакты
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <main>
            <Home />

            <div className="container-fluid content" data-depth="0.6">
              <About />
              <Portfolio />
              <Contacts />
            </div>
          </main>
        </Router>
        <footer>
          <div className="container-fluid text-center">
            <p>Разработчик: OlegKrieg (2021г.)</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
