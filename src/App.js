import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    'div', 
    {}, 
    [
      React.createElement('h1', { id: 'site-title' },'Adopt Me!'),
      React.createElement(Pet, { name: 'Marta', animal: 'Dog', breed: 'Blackdog' }),
      React.createElement(Pet, { name: 'Pepper', animal: 'Bird', breed: 'Cockatiel' }),
      React.createElement(Pet, { name: 'Fluffy', animal: 'Cat', breed: 'White' }),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));