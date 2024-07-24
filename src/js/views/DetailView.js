import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailView = () => {
  const { store } = useContext(Context);
  const { type, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const decodedId = decodeURIComponent(id);
    console.log("Type:", type);
    console.log("ID:", decodedId);

    let selectedItem = null;
    if (type === "characters" || type === "people") {
      selectedItem = store.characterList.find(character => character.url === decodedId);
    } else if (type === "planets") {
      selectedItem = store.planetsList.find(planet => planet.url === decodedId);
    } else if (type === "vehicles") {
      selectedItem = store.vehiclesList.find(vehicle => vehicle.url === decodedId);
    }

    console.log("Selected Item:", selectedItem);
    setItem(selectedItem);
  }, [store, type, id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src="https://placehold.co/700x400" className="img-fluid" alt={item.name} />
        </div>
        <div className="col-md-8">
          <h2>{item.name}</h2>
          <p>Some random description text here.</p>
          <div className="mt-3">
            {Object.keys(item)
              .filter(key => key !== "name") // Filter out the 'name' key
              .map(key => (
                <p key={key}><strong>{key}:</strong> {item[key]}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
