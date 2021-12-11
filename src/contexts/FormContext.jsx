import React, { useState, createContext } from 'react'

export const FormContext = createContext()

function FormProvider(props) {
  const [card, setCard] = useState({
    number: '',
    name: '',
    cardValidate: '',
    cvv: ''
  })

  const updateCard = (key, value) => {
    setCard({ ...card, [key]: value })
  }

  return (
    <FormContext.Provider
      value={{
        card,
        updateCard
      }}
    >
      {props.children}
    </FormContext.Provider>
  )
}

export { FormProvider }
