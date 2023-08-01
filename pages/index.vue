<template>
    <div>  
        <p><NuxtLink to="/secret">Go to Secret Page</NuxtLink></p>
      <button @click="logOut">logout</button>
      <p>""</p>
    </div>
</template>
<script setup>

    const logOut = async() => {

        const credentials = await signOut()
        console.log("credentials", credentials)
    }
</script>