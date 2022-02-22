import { useEffect, useState } from 'react';
import Recipes from './components/Recipes';
import './App.css';

function App() {
const APP_ID="4c784bd3";
const APP_KEY="aec8513bcb76a02cdde88d2418d7e90a";

const [recipe ,setRecipe] =useState([]);
const [search, setSearch] =useState('');
const [query, setQuery] = useState('chowmein');
 
useEffect(() => {
  const getRecipe = async () => {
    const exmpleReq=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const respose = await fetch(exmpleReq)
    const data =await respose.json();
    setRecipe(data.hits);
    console.log(data)
  };
 getRecipe(); 
}, [query]);



const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return (
   <div className="bg-gray-600">
     <div className="px-4 py-6 mb-10 bg-gray-700 w-fulls">
     <form onSubmit={getSearch} className="" >
       <input className="h-12 p-4 text-gray-600 bg-red-200 outline-none rounded-xl" type="text" placeholder="search here" value={search} required onChange={updateSearch}/>
       <button type="submit" className="py-4 mx-4 mt-4 text-white bg-blue-500 md:m-0 hover:bg-blue-700 rounded-xl px-14" >Search</button>
     </form>
     </div>
  
     <div className="grid grid-cols-1 gap-10 shadow-2xl lg:grid-cols-2">
       {recipe.map(recipe => (
      <Recipes
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      url={recipe.recipe.url}
      />
     ))}
     </div>
      
   </div>
  );
}

export default App;
