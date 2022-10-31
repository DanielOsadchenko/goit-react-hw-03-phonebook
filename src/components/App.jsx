import React, { Component } from 'react';
import { nanoid } from 'nanoid'


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

  
  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  }
  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = this.state.name.toLowerCase();
    console.log(this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedName)))
    if (this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedName)).length !== 0) {
      alert(`${this.state.name} is already in contacts`)
      
    }
    else { this.setState(prevState => ({contacts: [{ id: nanoid(), name: this.state.name, number: this.state.number }, ...prevState.contacts]}))}
    this.setState({ name: '', number: '' })
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
    <form onSubmit={this.handleSubmit}>
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