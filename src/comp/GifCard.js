import React from 'react'

const GifCard = (props) => {

    const img = props.img


    return (
        <>
        <a href={img.url} target="_blank" rel="noopener noreferrer">
            <div className="gifCard">
                <img height="100%" width="100%" src={img.images.downsized.url} alt="loading img"/>
            </div>
        </a>
        </>
    )
}

export default GifCard
