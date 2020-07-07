import React from 'react'

const GifCard = (props) => {

    const img = props.img
    const key = props.key
    return (
        <div className="gifCard">
            <img height="100%" width="100%" key={key} src={img.images.downsized.url} alt="yeet"/>
        </div>
    )
}

export default GifCard
