import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
"../styles/home.css";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { CharactersPage } from './views/CharactersPage'; // Add this import
import { PlanetsPage } from './views/PlanetsPage'; // Add this import
import { VehiclesPage } from './views/VehiclesPage'; // Add this import
import { FavoritesPage } from "./views/FavoritesPage";
import DetailView from "./views/DetailView";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="home-container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/characters" element={<CharactersPage />} />
        				<Route path="/planets" element={<PlanetsPage />} />
        				<Route path="/vehicles" element={<VehiclesPage />} />
						<Route exact path="/favorites" element={<FavoritesPage />} />
						<Route path="/details/:type/:id" element={<DetailView />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
