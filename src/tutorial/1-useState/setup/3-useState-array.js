import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' type='button' onClick={() => setPeople([])}>
        Clear all
      </button>
    </React.Fragment>
  )
}

export default UseStateArray
