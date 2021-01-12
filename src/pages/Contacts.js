import React from 'react';

export default function Contacts() {
  return (
    <section id="contacts-page">
      <h2>Контакты</h2>
      <div className="contacts-block row">
        <div className="col-md-2">
          <img src="" alt="" />
        </div>
        <div className="col-md-10">
          <h4>Телефон</h4>
          <p>+7-909-666-95-30</p>
        </div>
      </div>
      <div className="contacts-block row">
        <div className="col-md-2">
          <img src="" alt="" />
        </div>
        <div className="col-md-10">
          <h4>Почта</h4>
          <p>olegkrieg@gmail.com</p>
        </div>
      </div>
      <div className="contacts-block row">
        <div className="col-md-2">
          <img src="" alt="" />
        </div>
        <div className="col-md-10">
          <h4>GitHub</h4>
          <p>https://github.com/krieg1234</p>
        </div>
      </div>
    </section>
  );
}
