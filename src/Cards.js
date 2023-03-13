import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import './Cards.css';

const Cards = ({ results, page }) => {
    let display;
    
    if (results) {
        display = (results.sort((a,b) => a.name > b.name ? 1: -1)).map((x) => {
            let {id, name, image, species} = x;
            
            return(                
                 <Link
                    to ={`${page}${id}`}
                  key={id} className="card">
                    <div className="card__img">
                        <img  src={image} /></div>
                    <div className="card__content">
                        <div className='card__content-title'>{name}</div>
                        <div className='card__content-text'>{species}</div>
                    </div>
                </Link>      
            );
        });
    }else {
        display = "Loading..."; 
    }
    
    return <>{display}</>;
};
  
export default Cards;