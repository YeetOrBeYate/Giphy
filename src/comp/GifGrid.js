import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import GifCard from "./GifCard"


const GifGrid = () => {

    const Gifs = useSelector(state =>state.Gifs)

    console.log(Gifs.gifs, "the gifs")

    if(!Gifs.gifs){
        return(
            <div>
                Start searching! There's endless possibilities
            </div>
        )
    }
    return (
        <div className="gifGrid">
            {Gifs.gifs.map((img,index)=>(
                <GifCard img={img} key={index}/>
            ))}
        </div>
    )
}

export default GifGrid
