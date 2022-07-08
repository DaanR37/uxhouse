import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import { Component } from 'react';
import * as typeformEmbed from "@typeform/embed";

class Series extends Component {

  componentDidMount() {
    const popup1 = typeformEmbed.makePopup(
      'https://5ih8bu19m4v.typeform.com/to/G3ecsxbo',
      {
        mode: 'drawer_right',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onSubmit: function () {
          console.log('Typeform succesfully submitted')
        }
      }
    )
    document.getElementById('bt-popup').addEventListener('click', function
      () {
      popup1.open();
    });

  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default Series;
