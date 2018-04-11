import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDNmNxcSIGF1j9hZBh5hWmPDwrN2ek4LVg';


//creating a new component

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//take this compenent and generate html
ReactDOM.render(<App />,document.querySelector('.container'));
