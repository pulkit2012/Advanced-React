import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './Reducer'
// reducer function
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [people, setPeople] = useState(data)
  const [modal, setModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name }
      dispatch({ type: 'TESTING', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VAL' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'> add people</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
