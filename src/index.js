import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./styles/css/bulma-woldcup-live.css";
// import 'font-awesome/css/font-awesome.css';

import fontawesome from "@fortawesome/fontawesome";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";
import faCircle from "@fortawesome/fontawesome-free-regular/faCircle";
import faUserCircle from "@fortawesome/fontawesome-free-regular/faUserCircle";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

fontawesome.library.add(faUser);
fontawesome.library.add(faCircle);
fontawesome.library.add(faUserCircle);
fontawesome.library.add(faTimes);
fontawesome.library.add(faAngleDown);
fontawesome.library.add(faFacebook);
fontawesome.library.add(faGithub);


// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
