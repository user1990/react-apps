import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          onChange={ (e) => this.onInputChange(e.target.value) }
          placeholder="Search for video"
        />
      </div>
    );
  }
}

export default SearchBar;
