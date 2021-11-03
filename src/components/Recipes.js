import React from 'react'

function Recipes({title,calories,image , ingredients , url}) {
    return (
        <div className="mx-4 bg-white shadow-2xl focus:bg-gray-300 hover:bg-gray-300 rounded-2xl">
            <h1 className="m-4 text-4xl font-bold text-center text-gray-700 border-b-2 border-gray-400">{title}</h1>
            <div className="flex justify-center mx-4">
                <img className="w-full h-auto max-w-lg rounded-2xl max-h-80" src={image} alt="images"/>
            </div>

            <div className="px-4 py-6 mx-6 my-8 bg-gray-100 shadow-md rounded-xl">
                <ol className="h-64 overflow-auto text-left text-gray-600">
                    {ingredients.map(ingredient => (
                        <li className="py-2 text-xl">{ingredient.text}</li>
                    ))}
                </ol>
            </div>
            <div classname="">
                <p className="mb-2 text-center text-gray-500 ">The Calories you will burn :{calories}</p>
                <a href={url} className="block px-8 py-4 m-4 text-center text-white bg-blue-500 rounded-2xl">Read more</a>
            </div>
          
        </div>
    )
}

export default Recipes
