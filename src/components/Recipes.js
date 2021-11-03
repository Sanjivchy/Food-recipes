import React from 'react'

function Recipes({title,calories,image}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="images"/>
        </div>
    )
}

export default Recipes
