import React from 'react'

function Search({filter, setFilter, setFilteredList, filteredList}) {



  return (
    <>
     <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
    </>
  )
}

export default Search