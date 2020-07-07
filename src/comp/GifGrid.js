import React from 'react'
import {useSelector} from 'react-redux'
import GifCard from "./GifCard"
import { Spinner } from 'reactstrap';

const GifGrid = () => {

    

    const Gifs = useSelector(state =>state.Gifs)

    if(!Gifs.gifs || Gifs.gifs.length === 0){
        return(
            <div>
                Start searching! There's endless possibilities
            </div>
        )
    }
    if(Gifs.loading){
        return(
            <div>
                <Spinner color="secondary"/>
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
