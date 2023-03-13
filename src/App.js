import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Cards from "./Cards";
import Search from './Search';
import Card from "./Card";
import LoginForm from "./LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Card />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;

  console.log(results);
 

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

    
    useEffect(() => {
        (async function() {
            let data = await fetch(api).then(res=>res.json());
            updateFetchedData(data);
        })()
    }, [api]);

    
    

  return (
    <div className="App">
      <LoginForm > <p>hello</p></LoginForm>
      <div className="logo">
        <img src="/img/logo.png" />
      </div>
      <div className="main">
        <Search setSearch={setSearch}/>
      </div>
      <div className="cards">
        <Cards page="/" results = {results}  />
      </div>
    </div>
  );
}

export default App;
