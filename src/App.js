import { useEffect, useState } from 'react';
import Recipes from './components/Recipes';
import './App.css';

function App() {
const APP_ID="4c784bd3";
const APP_KEY="aec8513bcb76a02cdde88d2418d7e90a";

const [recipe ,setRecipe] =useState([]);
const [search, setSearch] =useState('');
const [query, setQuery] = useState('chicken');
 
useEffect(() => {
 getRecipe(); 
}, [query]);

const getRecipe = async () => {
  const exmpleReq=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const respose = await fetch(exmpleReq)
  const data =await respose.json();
  setRecipe(data.hits);
  console.log(data.hits)
};

const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return (
   <div>
     <form onSubmit={getSearch}>
       <input type="text" value={search} onChange={updateSearch}/>
       <button type="submit" >Search</button>
     </form>

     {recipe.map(recipe => (
     <Recipes
     key={recipe.recipe.label}
     title={recipe.recipe.label} 
     calories={recipe.recipe.calories}
     image={recipe.recipe.image}
      />
     ))}

   </div>
  );
}

export default App;
