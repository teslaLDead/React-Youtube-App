import React, { Component } from 'react';

class SearchBar extends Component {
  // this is how we initialize state in a class based component
  constructor(props) {
    super(props);
    // we are calling the parent method (i.e method of Component) with super

    this.state = { term:'Search For Videos' };
    //this 'term' refers to the input of the user, or the search term
    //thus whenever some event will occur we will change the value of the state or the 'term'
  }

  render(){
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
           //by doing this we are making the input component a controlled component
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
