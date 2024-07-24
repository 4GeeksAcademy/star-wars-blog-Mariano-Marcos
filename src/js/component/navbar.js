import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import  "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleFavoriteRemove = (item) => {
        actions.toggleFavorite(item); // Toggle favorite to remove
    };

    const favoritesToShow = store.favoritesList.slice(0, 6);
    const showViewAll = store.favoritesList.length > 6;

    return (
        <nav className="navbar navbar-light bg-light mb-3 navbar-custom">
            <Link to="/" className="navbar-brand">
                <img 
                    src="https://th.bing.com/th/id/R.677d897f105893f62f17ac06243c6972?rik=Dzm4gQHjPSlsgg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-star-wars-star-wars-logo-png-1600.png&ehk=0FABW%2fEC1%2b9E0XrRUjBY5sS5yt1iZQvHyovcOawIDMQ%3d&risl=&pid=ImgRaw&r=0" 
                    alt="Star Wars Logo" 
                    style={{ height: "160px", marginLeft: "22px" }}
                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown dropdown-end">
                    <button 
                        className="btn dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        aria-haspopup="true" 
                        aria-expanded={showDropdown} 
                        onClick={handleDropdownToggle}
                    >
                        Favorites <span className="badge badge-light">{store.favoritesList.length}</span>
                    </button>
                    <div 
                        className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`} 
                        aria-labelledby="dropdownMenuButton"
                    >
                        {favoritesToShow.map(favorite => (
                            <div key={favorite.url} className="dropdown-item d-flex justify-content-between align-items-center">
                                {favorite.name}
                                <button 
                                    className="btn btn-link p-0" 
                                    onClick={() => handleFavoriteRemove(favorite)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        ))}
                        {showViewAll && (
                            <Link className="dropdown-item" to="/favorites">
                                View All Favorites
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
