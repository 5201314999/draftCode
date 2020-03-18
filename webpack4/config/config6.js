// 测试wepack moudle ，有个sb 群友要把文件打包后再引入，我想这不是库的打包吗，你不去查查库的开发模式。直接自己摸，那我不是要好好探究下这背后的道理（没查明。头痛，放弃）。
const path = require("path");
module.exports = {
	mode: "production",
	// target: 'node',
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../dist/example6"),
		library: 'home',
		libraryTarget: 'umd' // universal
	},
	entry: {
	  home: path.resolve(__dirname, "../examples/example6/src/js/home.js"),
	},
}