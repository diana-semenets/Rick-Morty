import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import './Card.css';

function Card() {

    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, gender, status, species, origin, type} = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/${id}`;

    
    useEffect(() => {
        (async function() {
            let data = await fetch(api).then(res=>res.json());
            updateFetchedData(data);
        })()
    }, [api]); 

   
    return (
        <div className="card__container"> 
            <div className="">               
               <Link to="/" className="card__btn">
                    <img src="/img/arrow.svg" /> 
                    <p>GO BACK</p>
                </Link>
            </div>
            <div className="card__item">
                <div className="card__item-img">
                    <img src={image}  />
                </div>
                <div className="card__item-content">
                    <div className='item__content-title'>{name}</div>
                    <div className='item__content-info'>
                    <div className='item__content-subtitle'>Informations</div>
                    <div className="item__content-lists">
                        <div className="item__content-list">                            
                            <div className="item__category">Gender</div>
                            <div className="item__answer">{gender}</div>                            
                        </div>
                        <div className="item__content-list"> 
                            <div className="item__category">Status</div>
                            <div className="item__answer">{status}</div>                           
                        </div>
                        <div className="item__content-list">                        
                            <div className="item__category">Specie</div>
                            <div className="item__answer">{species}</div>                        
                        </div>
                        <div className="item__content-list">                        
                            <div className="item__category">Origin</div>
                            <div className="item__answer">{origin?.name}</div>                        
                        </div>
                        <div className="item__content-list">                       
                            <div className="item__category">Type</div>
                            <div className="item__answer">{type === ""? 'unknown' : type}</div>                        
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div> 
    );
  }
  
  export default Card;