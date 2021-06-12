export const reducer = (state, action) => {
  if (action.type === 'TESTING') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VAL') {
    return { ...state, isModalOpen: true, modalContent: 'no value typed' }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    return { ...state, people: newPeople }
  }
}
