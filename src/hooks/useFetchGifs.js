// React
import { useEffect, useState } from 'react'

// Helpers
import { getData } from '../helpers/getData'


export const useFetchGifs = ( category ) => {
    const [ images, setImages ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const getImages = async () => {
        const newImages = await getData(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( () => {
        getImages()
    }, []) 
    
    return {
        images,
        isLoading
    }

}

