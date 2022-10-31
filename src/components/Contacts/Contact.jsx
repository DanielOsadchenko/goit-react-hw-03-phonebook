import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({name, number, id, handleDelete}) => {
  return <li ><span>{name}: {number}</span><button type='button' onClick={() => {handleDelete(id)}}>Delete</button></li>
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  handleDelete: PropTypes.func
}