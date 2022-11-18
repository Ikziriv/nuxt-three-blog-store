<template>
	<div class="w-full h-auto">
        <div class="lg:px-[15%] px-[5%] pt-20">
            <h1
                class="lg:text-5xl text-2xl leading-normal font-semibold text-zinc-900 dark:text-white"
            >
                Stay Up To Date With The
            </h1>
            <h1
                class="lg:text-6xl text-4xl leading-normal font-bold rainbow-text"
            >
                Latest Fashion Trends
            </h1>

            <div class="lg:mt-20 mt-10">
                <h1 class="lg:text-lg font-medium mb-5 text-zinc-900 dark:text-white">
                    Filter Category
                    <button
                        v-if="activeCategory"
                        @click="setCategory(null)"
                        class="px-3 rounded-sm text-[13px] capitalize bg-gray-200 ml-5"
                    >
                        Clear &times;
                    </button>
                </h1>
                <div class="flex flex-wrap l items-center lg:space-x-5 mb-5">
                    <template v-for="(c, i) in categories" :key="`categroy-${i}`">
                        <button
                            @click="setCategory(c)"
                            :class="{
                                'bg-primary-100 text-primary': c == activeCategory,
                                ' bg-gray-200': c !== activeCategory,
                            }"
                            class="px-3 py-2 rounded-sm text-[13px] capitalize shrink-0 mr-4 mb-4 lg:mr-0 lg:mb-0"
                        >
                            {{ c }}
                        </button>
                    </template>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-20">
                    <template
                        v-for="(p, i) in filterProducts"
                        :key="`product-${i}-${p.id}`"
                    >
                        <NuxtLink
                            :to="`/merch/${p.id}`"
                            :class="{ 'lg:col-start-0': i === 0 && !activeCategory }"
                            class="w-auto h-auto transition-all hover:cursor-pointer"
                        >
                            <div class="w-full flex justify-center items-center">
                                <div class="w-full p-4">
                                    <div class="card flex flex-col justify-between items-center p-4 bg-white h-full rounded-lg shadow-2xl">
                                        <div class="prod-img p-4 py-2 w-auto h-40 bg-cover">
                                            <img :src="p.image" :alt="p.title" class="w-auto h-40 object-cover object-center"/>
                                        </div>
                                        <div class="flex flex-col items-start w-auto h-auto pt-16">
                                            <div class="prod-title mb-2">
                                                <p class="text-sm uppercase text-gray-900 font-normal">
                                                    {{ p.title }}
                                                </p>
                                            </div>
                                            <div class="flex flex-col w-full justify-between items-start text-gray-900">
                                                <h2 class="font-bold text-xl mb-2">
                                                    {{ formatPrice(p.price) }}
                                                </h2>
                                                <div class="w-full text-center px-4 py-0.5 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border border-gray-900 focus:outline-none">
                                                    <small>View</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </template>
                </div>
            </div>
        </div>
	</div>
</template>

<script setup>
	// Shoutout to the Fake store API
	// https://fakestoreapi.com/docs
	const { data: products } = await useAsyncData("products", () => {
		return queryContent("merch").find();
	});
	// create an array of categories from the products
	const categories = products.value[0].body.reduce((acc, product) => {
		if (!acc.includes(product.category)) {
			acc.push(product.category);
		}
		return acc;
	}, []);
	//var used to store the active category
	const activeCategory = ref(null);
	// function used to set the active category
	const setCategory = (category) => {
		activeCategory.value = category;
		useRouter().push({
			query: {
				category: category,
			},
		});
	};
	// set category on mount if it exist in query
	onMounted(() => {
		if (useRoute().query.category) {
			activeCategory.value = useRoute().query.category;
		}
	});
	// function used to format the price
	const formatPrice = (price) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(price);
	};
	// function used to filter the products by category
	const filterProducts = computed(() => {
		if (!activeCategory.value) {
			return products.value[0].body;
		}
		return products.value[0].body.filter((product) => {
			return (
				product.category.toLowerCase() == activeCategory.value.toLowerCase()
			);
		});
	});
	// Set header
	useHead({
		title: "Ikziriv | Merch",
	});
</script>

<style scoped></style>