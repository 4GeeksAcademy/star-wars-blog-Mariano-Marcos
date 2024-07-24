const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetsList: [],
			vehiclesList: [],
			favoritesList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			getCharacters: (url) => {
				fetch(url)
				.then(response => {
					if(!response.ok){
						throw new Error()
					}
				return response.json()
				})
				.then (result => {
					setStore({ characterList: [...getStore().characterList, ...result.results] })

					if (result.next){
						getActions().getCharacters(result.next)
					}
				})
			},
			getPlanets: (url) => {
				fetch(url)
				.then(response => {
					if(!response.ok){
						throw new Error()
					}
				return response.json()
				})
				.then (result => {
					setStore({ planetsList: [...getStore().planetsList, ...result.results] })

					if (result.next){
						getActions().getPlanets(result.next)
					}
				})
			},
			getVehicles: (url) => {
				fetch(url)
				.then(response => {
					if(!response.ok){
						throw new Error()
					}
				return response.json()
				})
				.then (result => {
					setStore({ vehiclesList: [...getStore().vehiclesList, ...result.results] })

					if (result.next){
						getActions().getVehicles(result.next)
					}
				})
			},
			openLearnMoreView: (item) => {

			},
            toggleFavorite: (item) => {
                const store = getStore();
                const favoriteIndex = store.favoritesList.findIndex(favorite => favorite.url === item.url);

                if (favoriteIndex >= 0) {
                    // Item is already in the list, so remove it
                    const newFavoritesList = store.favoritesList.filter(favorite => favorite.url !== item.url);
                    setStore({ favoritesList: newFavoritesList });
                    // alert(`${item.name} removed from favorites`);
                } else {
                    // Item is not in the list, so add it
                    const newFavoritesList = [...store.favoritesList, item];
                    setStore({ favoritesList: newFavoritesList });
                    // alert(`${item.name} added to favorites`);
                }
            },

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().getCharacters('https://swapi.dev/api/people')
				getActions().getPlanets('https://swapi.dev/api/planets')
				getActions().getVehicles('https://swapi.dev/api/vehicles')
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
