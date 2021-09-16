import React from 'react'
import {useSelector} from 'react-redux'
import GifCard from "./GifCard"
import { Spinner } from 'reactstrap';
import { SEARCH_GIFS } from '../redux/actions/types'

import { RootState } from '../redux/reducers/reducer'

const GifGrid = () => {

    const gifs = useSelector((state: RootState) => state.gifs.gifsArray)

    const loadingArray = useSelector((state: RootState) => state.loading.isLoading)

    const isLoading = loadingArray.some(loader => loader === SEARCH_GIFS)
    
    const gifsPresent = gifs.length

    if(!gifsPresent && !isLoading){
        return(
            <div data-testid='grid-1'>
                Start searching! There's endless possibilities
            </div>
        )
    }
    if (isLoading) {
        return (
            <div data-testid='grid-2'>
                <Spinner color="secondary" />
            </div>
        )
    }
    return (
        <div className="gifGrid">
            {gifs.map((img,index)=>(
                <GifCard img={img} key={index}/>
            ))}
        </div>
    )
}

export default GifGrid
