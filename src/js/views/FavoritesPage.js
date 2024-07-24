import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

export const FavoritesPage = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <h2>Favorites</h2>
            <ul className="list-group">
                {store.favoritesList.length > 0 ? (
                    store.favoritesList.map(favorite => (
                        <li key={favorite.url} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{favorite.name}</span>
                            <button className="btn btn-link p-0" onClick={() => actions.toggleFavorite(favorite)}>
                                <i className="fas fa-trash-alt brown-icon"></i>
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No favorites yet</li>
                )}
            </ul>
            <Link to="/" className="btn btn-solid mt-3">Back to Home</Link>
        </div>
    );
};
