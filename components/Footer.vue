<template>
    <footer class="flex flex-row justify-between items-center w-full h-auto py-20 md:py-16 px-4 md:px-16 z-10 bg-black dark:bg-zinc-900">
        <div class="flex flex-col w-auto h-auto">
            <nuxt-link-to to="/" class="font-black text-zinc-200 dark:text-white uppercase text-lg mb-2">
                <span class="text-blue-500">I</span><span class="text-red-500">I</span>kzi
            </nuxt-link-to>
            <ul class="flex flex-row space-x-8 md:space-x-12 justify-center items-center mb-16 md:mb-16">
                <li class="text-xs uppercase font-medium text-white hover:text-zinc-200">Blog</li>
                <li class="text-xs uppercase font-medium text-white hover:text-zinc-200">Merch</li>
                <li class="text-xs uppercase font-medium text-white hover:text-zinc-200">About</li>
            </ul>
        </div>
        <div class="flex flex-row w-auto h-auto space-x-2 md:space-x-4">
            <div class="flex justify-center items-center bg-transparent p-2 rounded-md">
                <Icon class="w-5 h-5 text-white hover:text-white" icon="ion:logo-facebook" />
            </div>
            <div class="flex justify-center items-center bg-transparent p-2 rounded-md">
                <Icon class="w-5 h-5 text-white hover:text-white" icon="ion:logo-instagram" />
            </div>
            <div class="flex justify-center items-center bg-transparent p-2 rounded-md">
                <Icon class="w-5 h-5 text-white hover:text-white" icon="ion:logo-twitter" />
            </div>
            <div class="flex justify-center items-center bg-transparent p-2 rounded-md">
                <Icon class="w-5 h-5 text-white hover:text-white" icon="ion:logo-pinterest" />
            </div>
        </div>
    </footer>
</template>


<script setup>
	import { Icon } from "@iconify/vue";
</script>

<style scoped>
</style>