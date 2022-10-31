import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  
  handleFilter = (e) => {
    this.props.onFilter(e.currentTarget.value)
  }
  
  render() {
    return <label>Find contacts by name <input
            type='text'
            name='filter'
            onChange={this.handleFilter}
          ></input></label>
  }
}

Filter.propTypes = {
onFilter: PropTypes.func
}