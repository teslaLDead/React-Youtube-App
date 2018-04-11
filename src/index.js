import React from 'react';
import ReactDOM from 'react-dom';
//creating a new component

const App = () => {
  return <div>Hi!</div>;
}

//take this compenent and generate html
ReactDOM.render(<App />,document.querySelector('.container'));
