import {useState, useEffect} from 'react'
import './App.css';

import PersonForm from './components/personForm';
import Person from './components/Person'
import Search from './components/Search';
import Notification from './components/Notification';
import { deleteContact, getAll } from './services/persons';
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [notification, setNotification] = useState(null)
  const [filter, setFilter] = useState('')


    useEffect(() => {
      getAll()
      .then(initialPersons => {
        console.log('promise fulfilled', initialPersons)
        setPersons(initialPersons)
        
      })
  }, [])
  
console.log('rendered', persons.length, 'persons')
  
  const notify = (message, type='info') => {
  setNotification({message, type})
  setTimeout(() => {
    setNotification(null)
  }, 3001)
}
  
  const deleteById = (id) => {
    deleteContact(id)
    setPersons(persons.filter(person => person.id !== id))
  }
 
  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filter))
  return (
    <div className='app'>
    <Notification notification={notification}/>
      <h2 className='app-header'>Phonebook</h2>
      <PersonForm 
        newName={newName} 
        setNewName={setNewName} 
        number={number} 
        setNumber={setNumber} 
        persons={persons} 
        setPersons={setPersons} 
        notify={notify}/>
      <h2 className='app-header'>Numbers</h2>
      <Person persons={filteredPersons} setPersons={setPersons} deleteById={deleteById}/>
      <h2 className='app-header'>Search</h2>
      <Search setFilter={setFilter} filter={filter} />
    </div>
  )
}

export default App
