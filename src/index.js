import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {Provider} from 'mobx-react';
import store from 'store/store';


ReactDOM.render(
  <Provider store={store}>
    <App/>   
  </Provider>,
  document.getElementById('root')
);
