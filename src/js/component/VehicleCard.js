import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

const VehicleCard = ({name, manufacturer, crew, vehicle_class, isFavorite, handleFavoriteClick, url}) => {
    return (
        <div className="card col-1 p-3 m-2" style={{"width": "18rem"}}>
            <img src="https://placehold.co/700x400" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Manufacturer: {manufacturer}</p>
                <p className="card-text">Crew: {crew}</p>
                <p className="card-text">Vehicle Class: {vehicle_class}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Link to={`/details/vehicles/${encodeURIComponent(url)}`} className="btn btn-solid">Learn More!</Link>
                    <button className="btn btn-link mb-0 p-0" onClick={handleFavoriteClick}>
                        <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VehicleCard;
