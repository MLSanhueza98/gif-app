export const getData = async( category ) => {
    //console.log('adjkbask')
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J4XxI1BoZYZuCGqnryXVoN3OYdeCNwyu&q=${ category }&limit=20`
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=hFwD66GBBAP87l5c2FAlkofBGLB4d4Q0&q=${category}&limit=20`
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs
}