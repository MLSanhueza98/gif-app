// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs'
// Components
import GifItem from './GifItem'


const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category )
 
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && <h2>Cargando...</h2> 
        }

        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GifItem 
                key={ image.id } 
                { ...image } //con esta linea estoy esparciendo las propiedades de image (en este caso), como properties
              />
            ))
          }
        </div>
    </>
  )
}

export default GifGrid
