import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom';

import App from './App';
import CharacterIdPropvider from './Context';

ReactDOM.render(
  <>
    <CharacterIdPropvider>
      <App />
    </CharacterIdPropvider>
  </>,
  document.getElementById('root'),
);
