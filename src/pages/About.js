import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import avatar from '../pictures/avatar.jpg';

class About extends React.Component {
  render() {
    return (
      <section className="about" id="about-page">
        <h2>Мои навыки</h2>

        <div className="row">
          <div className="card col-md-3">
            <div className="about-block">
              <img src={avatar} alt="" className="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Web-разработка</h5>
                <p class="card-text " id="card-text1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="card col-md-3">
            <div className="about-block">
              <img src={avatar} alt="" className="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Вёрстка</h5>
                <p class="card-text " id="card-text2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="card col-md-3">
            <div className="about-block">
              <img src={avatar} alt="" className="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Дополнительные навыки</h5>
                <p class="card-text " id="card-text3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="card col-md-3">
            <div className="about-block">
              <img src={avatar} alt="" className="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Образование и курсы</h5>
                <p class="card-text " id="card-text4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="btn btn-primary">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
