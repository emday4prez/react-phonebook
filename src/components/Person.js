import React from 'react'

function Persons({persons, deleteById}) {
  
  return (
    <div>{persons.map(person => {
     return <div key={person.id}>
        {person.name} - {person.number}
        <button onClick={() => deleteById(person.id)} >delete</button>
        </div>
    })}</div>
  )
}

export default Persons