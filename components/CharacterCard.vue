<template>
    <div class="flex m-3 bg-gray-500 rounded-xl">
        <NuxtLink :to="`/character/${id}`">
            <NuxtImg 
                :src="image"
                width="200"
                height="200"
                class="rounded-xl"
                :modifiers="grayScaleWhenDead"
            />
            <div class="px-6 py-4">
                <h3>{{ name }}</h3>
                <p>{{ status }}</p>
                <p>{{ species }}</p>
                <p>{{ locations }}</p>
            </div>
        </NuxtLink>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    },
    species :{
        type: String,
        required: true
    },
    locations : { 
        type: String,
        required: true
    }
})
const grayScaleWhenDead = computed(() => props.status === 'Dead' ? {grayscale : true} : {})
</script>