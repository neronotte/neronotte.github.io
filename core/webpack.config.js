const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.tsx", // Entry point of your application
	output: {
		filename: "bundle.js", // Output bundle file name
		path: path.resolve(__dirname, "../docs"), // Output directory
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"), // Serve files from this directory
		},
		port: 3000, // Port for the development server
		open: true, // Open the default web browser when the server starts
	},
};
