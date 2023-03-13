import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import './Search.css';


export default function Search({setSearch}) {

  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  let {name} = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let formData ={};
  const ls = localStorage;
  
  useEffect(() => {
    (async function() {
        let data = await fetch(api).then(res=>res.json());
        updateFetchedData(data);
    })()
}, [api]); 
 
  function handleSubmit(event) {
    event.preventDefault();
    search();   
  }
    
  function search() {
   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}`;
     
  }
  function updateSearch(event) {
    setSearch(event.target.value);  
    formData[event.target.name] = event.target.value;
    ls.setItem('formData', JSON.stringify(formData));
  }

  if(ls.getItem('formData')) {
    formData = JSON.parse(ls.getItem('formData'));
    console.log(formData.search);
    
    setSearch(formData.search);
  }

    return (      
      <div className="search">
        <form onSubmit={handleSubmit} >
          <input
          id="form"
            type="search"
            name="search"              
              className="search__input"
              placeholder="Filter by name..."
              onChange={updateSearch}
          />
         <img className='search__icon' src="/img/search.png" />
                
            
        </form>      
      </div>       
    );
}