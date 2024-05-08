// React
import { useState } from 'react'

// Components
import { GifGrid, InputBar } from './components'


const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        //Metodo 1
        setCategories([ newCategory, ...categories ])
        //Metodo 2
        //setCategories( category => ['one Piece', ...category])
    }

  return (
    <>
        <h1>Gif Expert App</h1>

        <InputBar 
            onNewCategory={ value => onAddCategory(value) }
        />

        {
            categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                    /> 
                )
            )
        }
    </>
  )
}

export default GifExpertApp
