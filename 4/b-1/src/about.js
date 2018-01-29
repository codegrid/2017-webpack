import aboutContainer from './lib/about-container';
import headerContainer from './lib/header-container';

const app = document.getElementById('app');

app.appendChild(headerContainer());
app.appendChild(aboutContainer());