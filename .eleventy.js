export default function (eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "dist",

            includes: "_includes",
            layout: "layouts"
        }
    }
}