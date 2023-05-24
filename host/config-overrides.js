const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

module.exports = {
	webpack: function (config) {
		config.output.publicPath = "auto";
		config.plugins.push(
			new ModuleFederationPlugin({
				name: "host",
				filename: "remoteEntry.js",
				remotes: {
					remote: "remote@http://localhost:4201/remoteEntry.js",
				},
				exposes: {},
				shared: {
					...dependencies,
					react: {
						singleton: true,
						requiredVersion: dependencies.react,
					},
					"react-dom": {
						singleton: true,
						requiredVersion: dependencies["react-dom"],
					},
				},
			}),
		);

		return config;
	},
};
