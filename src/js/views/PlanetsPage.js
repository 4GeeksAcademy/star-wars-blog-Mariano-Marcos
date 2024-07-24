import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlanetCard from "../component/PlanetCard";
import "../../styles/cards.css";

export const PlanetsPage = () => {
  const { store , actions } = useContext(Context);
  const planets = store.planetsList; // Use the character list from your store

  return (
    <div className="mt-5">
      <h2>Planets</h2>
      <div className="d-flex flex-wrap">
        {planets.map((planet) => (
			<PlanetCard 
                key={planet.url}
                name={planet.name} 
                climate={planet.climate} 
                population={planet.population} 
                diameter={planet.diameter} 
                isFavorite={store.favoritesList.some(favorite => favorite.url === planet.url)}
                handleFavoriteClick={() => actions.toggleFavorite(planet)}
            />
        ))}
      </div>
    </div>
  );
};
