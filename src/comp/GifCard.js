import React from 'react'

const GifCard = (props) => {

    const img = props.img

    return (
        <div className="gifCard">
            <img height="100%" width="100%" src={img.images.downsized.url}/>
        </div>
    )
}

export default GifCard
