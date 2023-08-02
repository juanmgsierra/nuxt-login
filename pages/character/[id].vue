<template>
    <div class="flex flex-wrap">
      <NuxtLink to="/" class="ml-3">Back</NuxtLink>

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