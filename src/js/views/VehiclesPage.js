import React, { useContext } from "react";
import { Context } from "../store/appContext";
import VehicleCard from "../component/VehicleCard";
import "../../styles/cards.css";

export const VehiclesPage = () => {
  const { store ,actions} = useContext(Context);
  const vehicles = store.vehiclesList; // Use the character list from your store

  return (
    <div className="mt-5">
        <h2>Vehicles</h2>
        <div className="d-flex flex-wrap">
				{store.vehiclesList.map(vehicle => (
					<VehicleCard 
						key={vehicle.url}
						name={vehicle.name} 
						manufacturer={vehicle.manufacturer} 
						crew={vehicle.crew} 
						vehicle_class={vehicle.vehicle_class} 
						isFavorite={store.favoritesList.some(favorite => favorite.url === vehicle.url)}
                        handleFavoriteClick={() => actions.toggleFavorite(vehicle)}
					/>
				))}
	    </div>
    </div>
  );
};
