import helloContainer from './lib/hello-container';
import headerContainer from './lib/header-container';
import './assets/index.scss';

const app = document.getElementById('app');

app.appendChild(headerContainer());
app.appendChild(helloContainer());