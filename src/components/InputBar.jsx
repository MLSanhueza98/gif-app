import { useState } from "react"

// eslint-disable-next-line react/prop-types
const InputBar = ({  onNewCategory }) => {
  
  const [ inputValue, setInputValue ] = useState('')
  
  const onInputChange = ({ target }) => {
    console.log(target.value)
    setInputValue(target.value)
  }

  const onSubmit = ( event ) => {
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;
    //onNewCategory( categories => [ inputValue, ...categories ])
    onNewCategory( inputValue.trim() )
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Search Gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

export default InputBar
