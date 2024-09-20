export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/**");

    return {
        dir: {
            input: "src",
            output: "dist",

			includes: "_includes",
			layout: "layouts"
		}
	}
}
