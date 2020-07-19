import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile/Profile';
import * as serviceWorker from './serviceWorker';
import test from './imgage/aa.png'


const handleName = (data) =>{
  alert(data)
}

ReactDOM.render(
  <React.StrictMode>
    <Profile name="Fawez" bio="wondering" profession="engineer" handleName={handleName}><img src={test} /></Profile>
      
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
