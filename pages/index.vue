<template>
    <div class="flex flex-wrap">      
        <CharacterCard
            v-for="{ id, name, image, status, species, location} in data.characters.results"
            :key="id"
            :id="id"
            :name="name"
            :image="image"
            :status="status"
            :species="species"
            :locations="location.name"
        />
    </div>
</template>
<script setup lang="ts">
       
    type CharacterResults = {
    characters: {
        results: {
        id: string,
        name: string,
        image: string,
        status: string,
        species: string,
        location: {
            name: string
        }
        }[]
    }
    }
    const query = gql`
    query getCharacters {
        characters {
        results{
            name,
            species,
            name,
            status,
            id,
            type,
            image,
            location{
                name
            }
        }
        }
    }
    `

    const { data, error } = await useAsyncQuery<CharacterResults>(query)
</script>