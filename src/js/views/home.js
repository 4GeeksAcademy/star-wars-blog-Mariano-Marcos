import React, { useContext , useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CharacterCard from "../component/characterCard";
import PlanetCard from "../component/PlanetCard";
import VehicleCard from "../component/VehicleCard";


export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
	<div className="mt-5 home-container">
      <div>
        <div>
          <Link to={"/characters"}>
            <h2>Characters</h2>
          </Link>
        </div>
        <div className="d-flex overflow-auto">
          {store.characterList.map(character => (
            <CharacterCard
              key={character.url}
              name={character.name} 
              gender={character.gender} 
              hair_color={character.hair_color} 
              eye_color={character.eye_color} 
              isFavorite={store.favoritesList.some(favorite => favorite.url === character.url)}
              handleFavoriteClick={() => actions.toggleFavorite(character)}
			  url={character.url}
            />
          ))}
        </div>
      </div>
		<div>
			<div>
				<Link to={"/planets"}>
					<h2>Planets</h2>
				</Link>
			</div>
			<div className="d-flex overflow-auto">
				{store.planetsList.map(planet => (
				<PlanetCard 
					key={planet.url}
					name={planet.name} 
					climate={planet.climate} 
					population={planet.population} 
					diameter={planet.diameter} 
					isFavorite={store.favoritesList.some(favorite => favorite.url === planet.url)}
                    handleFavoriteClick={() => actions.toggleFavorite(planet)}
					url={planet.url}
				/>
				))}
			</div>
		</div>
		<div>
			<div>
				<Link to={"/vehicles"}>
					<h2>Vehicles</h2>
				</Link>
			</div>
			<div className="d-flex overflow-auto">
				{store.vehiclesList.map(vehicle => (
					<VehicleCard 
						key={vehicle.url}
						name={vehicle.name} 
						manufacturer={vehicle.manufacturer} 
						crew={vehicle.crew} 
						vehicle_class={vehicle.vehicle_class} 
						isFavorite={store.favoritesList.some(favorite => favorite.url === vehicle.url)}
                        handleFavoriteClick={() => actions.toggleFavorite(vehicle)}
						url={vehicle.url}
					/>
				))}
			</div>
		</div>
	</div>
);
}

