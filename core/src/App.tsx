import React from "react";
import "./App.scss";

import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./presentation/home/Home";
import About from "./presentation/about/About";

const router = createHashRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "about",
		element: <About />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
