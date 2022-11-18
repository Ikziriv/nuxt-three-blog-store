<template>
	<div class="w-full h-auto">
        <Hero />
        <div class="lg:px-[15%] px-[5%] mt-4">
            <span
                class="uppercase font-medium tracking-wider pb-2 text-xs text-gray-500 darK;text-gray-600 mb-2"
            >
                Blog Posts
            </span>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-1">
                <template
                    v-for="(b, i) in blogNav[0].children"
                    :key="`blogNavItem-${b._path}-${i}`"
                >
                    <div class="w-full h-64 px-7 py-5 rounded-lg shadow border dark:border-black relative">
                        <h2 class="text-xl md:text-2xl font-black rainbow-text dark:text-white">
                            {{ b.title }}
                        </h2>
                        
                        <div class="absolute inset-x-0 bottom-0 w-auto h-auto p-4">
                            <!-- Loop over files inside the content dir -->
                            <ul
                                v-if="b.children"
                                class="list-inside mt-4 pl-2 space-y-1"
                            >
                                <template
                                    v-for="(child, k) in b.children"
                                    :key="`childNav-${child._path}-${k}-${i}`"
                                >
                                    <li
                                        class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 transition-all"
                                    >
                                        <NuxtLink :to="`/blog${child._path}`" class="text-zinc-900 dark:text-zinc-200">
                                            {{ child.title }}
                                        </NuxtLink>
                                    </li>
                                </template>
                            </ul>
                            <ul v-else class="list-inside mt-4 pl-2 space-y-3">
                                <li
                                    class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 transition-all"
                                >
                                    <NuxtLink :to="`/blog${b._path}`" class="text-zinc-900 dark:text-zinc-200"> Get Started </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </div>
        </div>
	</div>
</template>

<script setup>
	const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("blog"));
	});
	useHead({
		title: "Ikziriv | Design & Development",
	});
</script>