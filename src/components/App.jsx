import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';


export default class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],

  filter: '',
  }

  addContact = (newContact) => {
    if (this.state.contacts.map(contact => contact.name.toLowerCase()).includes(newContact.name.toLowerCase())) {
      alert('error');
    }
    else {this.setState(prevState => ({contacts: [newContact, ...prevState.contacts]}))}
    
  } 

  handleFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
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
    <h2>Phonebook</h2>
    <ContactForm onSubmit = {this.addContact}></ContactForm>
        
        <div>
          <label>Find contacts by name <input
            type='text'
            name='filter'
            value={this.state.filter}
            onChange={this.handleFilter}
          ></input></label>

        </div>

        <section>
          <h2>Contacts</h2>
          <ul>
            {visibleContacts.map(contact => {
              return <li key={contact.id}><span>{contact.name}: {contact.number}</span><button type='button' onClick={() => {this.handleDelete(contact.id)}}>Delete</button></li>
            })}
          </ul>
    </section>
    </div>
  );
  }
}
