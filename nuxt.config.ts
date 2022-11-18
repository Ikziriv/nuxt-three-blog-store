// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "@unocss/nuxt",
        "@nuxtjs/color-mode"
    ],
    unocss: {
        uno: true,
        preflight: true
    },
    colorMode: {
        preference: "system",
        classSuffix: ""
    },
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
	},
})
