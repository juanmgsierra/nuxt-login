<template>
    <NuxtLink  to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</NuxtLink>
    <div class="flex flex-wrap">
      
      <CharacterCard
        :id="data.character.id"
        :name="data.character.name"
        :image="data.character.image"
        :status="data.character.status"
        :species="data.character.species"
        :locations="data.character.location.name"
    />
    </div>

</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

type Character = {
    character: {
        name: string;
        image: string;
        status: string;
        id: string;
        species: string;
        location: {
            name: string
        }
    }
}

const route = useRoute()

const query = gql`
query getCharacter($id: ID!) {
  character(id: $id) {
      name
      image
      status
      id
      species
      location {
        name
      }
    }
}
  `
  const { data, error } = await useAsyncQuery<Character>(query, {
    id: route.params.id
  })
</script>