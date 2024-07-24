import React  from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

const PlanetCard = ({name, climate, population, diameter, isFavorite, handleFavoriteClick, url}) => {
    return (
        <div className="card col-1 p-3 m-2" style={{"width": "18rem"}} >
            <img src="https://placehold.co/700x400" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Climate: {climate}</p>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Diameter: {diameter}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/planets/${encodeURIComponent(url)}`} className="btn btn-solid">Learn More!</Link>
                    <button className="btn btn-link mb-0 p-0" onClick={handleFavoriteClick}>
                        <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard