<template>
    <div>
      <button @click="signIn">login</button>
  
    </div>
</template>
<script setup>

    const signIn = async () => {
        const credentials = await signInUser("jmgarcia@banc.hn", "123456")
        if(credentials.user){
          navigateTo("/")
        }
    }

</script>