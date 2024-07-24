import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CharacterCard from "../component/characterCard";
import "../../styles/cards.css";

export const CharactersPage = () => {
    const { store, actions } = useContext(Context);
    const characters = store.characterList; // Use the character list from your store

    return (
        <div className="mt-5">
        <h2>Characters</h2>
        <div className="d-flex flex-wrap">
            {characters.map((character) => (
            <CharacterCard
                key={character.url} // Ensure you use a unique key
                name={character.name}
                gender={character.gender}
                hair_color={character.hair_color}
                eye_color={character.eye_color}
                isFavorite={store.favoritesList.some(favorite => favorite.url === character.url)}
                handleFavoriteClick={() => actions.toggleFavorite(character)}
            />
            ))}
        </div>
        </div>
    );
};
