import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';

const LS_KEY = 'saved_contacts';

export default class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }

  componentDidMount() {
    let parsedContacts = [];

    if (localStorage.getItem(LS_KEY)) {
      parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    }
    if (parsedContacts.length !== 0) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state) {
      const prepareContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem(LS_KEY, prepareContacts);
    }
  }

  addContact = (newContact) => {
    if (this.state.contacts.map(contact => contact.name.toLowerCase()).includes(newContact.name.toLowerCase())) {
      alert('error');
    }
    else {this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))}
    
  } 

  setFilter = (filterValue) => {
    this.setState({filter: filterValue})
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
    console.log(id)
  }

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
    )

    return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
      <h1>Phonebook</h1>
      <ContactForm onSubmit = {this.addContact}/>

      <h2>Contacts</h2>
        <Filter onFilter={this.setFilter} />
        <Contacts visibleContacts = {visibleContacts} handleDelete= {this.handleDelete}></Contacts>

    </div>
  );
  }
}
