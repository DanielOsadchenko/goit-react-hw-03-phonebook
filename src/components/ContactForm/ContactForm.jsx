import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  }
  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = { id: nanoid(), name: this.state.name, number: this.state.number };
    this.props.onSubmit(contact);
    this.setState({ name: '', number: '' })


  }
  
  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChangeName}
          value = {this.state.name}
        />
      </label>
      <label>Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
              onChange={this.handleChangeNumber}
              value={this.state.number}
        />    
      </label>
      <button type="submit">Add contact</button>
        </form>
  }

}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}