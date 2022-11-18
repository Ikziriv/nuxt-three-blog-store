<template>
    <header class="flex flex-row justify-between items-center w-full h-auto bg-gray-50 dark:bg-zinc-900 py-8 px-4 md:px-16 z-10 top-0 backdrop-blur-sm fixed">
        <nuxt-link-to to="/" class="font-black text-zinc-900 dark:text-white uppercase text-2xl lg:text-4xl">
            <span class="text-blue-500">I</span><span class="text-red-500">I</span>kzi-riv
        </nuxt-link-to>
        <div class="flex flex-row items-center space-x-2 w-auto h-auto">
            <nav class="w-auto h-auto space-x-8 mr-2">
                <template v-for="(n, i) in links" :key="`navLink-${i}`">
                    <NuxtLink
                        :to="n.link"
                        class="inline-block nav-link hover:text-primary group"
                    >
                    <span class="uppercase font-thin text-xs text-black dark:text-gray-50">
                        {{n.name}}
                    </span>
                    </NuxtLink>
                </template>
            </nav>
            
            <div class="px-4">
                <switch-mode />
            </div>
        </div>
    </header>
</template>

<script setup>
	const links = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Blog",
			link: "/blog",
		},
		{
			name: "Merch",
			link: "/merch",
		},
	];
</script>

<style scoped>
	.nav-link.router-link-active.router-link-exact-active {
		@apply text-primary;
	}
</style>