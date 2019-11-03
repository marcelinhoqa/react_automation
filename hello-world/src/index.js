import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
// ReactDom.render é aonde vai exibir a classe dentro do browser
// App é a classe principal, ele fala para encontrar o elemento root da página
// com isso ele usa a classe App e adiciona a informação que ele precisa dentro do elemento root
