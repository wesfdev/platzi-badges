
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css';
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById("app");
const badgNew = <BadgeNew />;

ReactDOM.render(badgNew, container);
