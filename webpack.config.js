"use strict";

const Path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = 3000;

module.exports = (options) => {
	const dest = Path.join(__dirname, "dist");

	let webpackConfig = {
		devtool: 'source-map',
		entry: ["./src/scripts/index.tsx"],
		output: {
			path: dest,
			filename: "bundle.[hash].js",
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				minify: false,
			}),
		],
		module: {
			rules: [
				{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
				{ test: /\.ts$/, use: "ts-loader" },
				{ test: /\.tsx$/, use: "ts-loader" },
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			],
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json"],
		},
		mode: "development"
	};

	webpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());

	webpackConfig.devServer = {
		hot: true,
		port,
	};

	return webpackConfig;
};
