import React from 'react';
import { Contact } from './Contact';
import PropTypes from 'prop-types';

export const Contacts = ({visibleContacts, handleDelete}) => {
  return  <ul>
            {visibleContacts.map(contact => {
              return <Contact
                name = {contact.name}
                number = { contact.number}
                id = {contact.id}
                handleDelete={handleDelete}
                key={contact.id}
              ></Contact>
            })}
          </ul>
}
Contacts.propTypes = {
  visibleContacts: PropTypes.array,
  handleDelete: PropTypes.func,
}