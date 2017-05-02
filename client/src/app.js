import React from 'react';
import ReactDOM from 'react-dom';
import ShowContainer from './containers/ShowContainer'

window.onload = function () {
  ReactDOM.render(
    <ShowContainer />,
    document.getElementById('app')
  );
};
