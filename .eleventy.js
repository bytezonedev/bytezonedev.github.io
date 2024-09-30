import faviconsPlugin from 'eleventy-plugin-gen-favicons';

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/**");
	eleventyConfig.addPlugin(faviconsPlugin, {
		outputDir: "dist",
	});

    return {
        dir: {
            input: "src",
            output: "dist",

			includes: "_includes",
			layout: "layouts"
		}
	}
}
