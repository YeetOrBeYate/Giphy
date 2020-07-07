import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


const GifGrid = () => {

    const Gifs = useSelector(state =>state.Gifs)

    console.log(Gifs.gifs, "the gifs")
    return (
        <div>
            
        </div>
    )
}

export default GifGrid
