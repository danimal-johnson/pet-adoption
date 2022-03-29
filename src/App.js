import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      <Pet name="Marta" animal="Dog" breed="Blackdog" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Fluffykins" animal="Cat" breed="Tabby" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));