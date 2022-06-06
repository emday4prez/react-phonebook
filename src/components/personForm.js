import React from 'react'
import { create, update } from '../services/persons'
const PersonForm = ({newName, number, setNewName, setNumber, persons, setPersons, notify}) => {

const addName = (e) => {
  e.preventDefault()
  const newPerson = {
    name: newName, number: number, id: persons.length + 1
  }
  const existingPerson = persons.find(p => p.name === newPerson.name)

  
  if(existingPerson){
    const id = existingPerson.id
      const ok = window.confirm(`${existingPerson.name} is already in the phonebook, update number?`)
      if (ok) {
          update(id, {...existingPerson, number: number})
          .then(savedPerson => {
            notify(`updated info of ${savedPerson.name}`)
            console.log('new persons:', persons)
          
          })
          .catch(error => {
            console.log('error updating name: ',error)
            notify(
              `the person ${existingPerson.name} had already been removed`, 'alert'
            )
            setPersons(persons.filter(p => p.id !== id))
          
          })
      }
    }else{
      create(newPerson)
      .then(returnedPerson => {
      // console.log(returnedPerson)
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNumber('')
    }).catch(e => console.error(e))
  
  console.log('added a person, persons:', persons)
    }
  
  
 
}

  return (
    <form onSubmit={addName}>
        <div> name: <input value={newName} onChange={(e) => setNewName(e.target.value)} /></div>
        <div>number: <input value={number} onChange={(e) => setNumber(e.target.value)} /></div>
        <div><button type="submit">add</button></div>
      </form>
  )
}

export default PersonForm