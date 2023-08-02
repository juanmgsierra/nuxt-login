<template>
    <div >
        <header class="bg-gray-200">
            <nav class="flex justify-end">    
                <div class="mr-5" v-if="firebaseUser" >
                    <button @click="logOut" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log Out</button>        
                </div>             
            </nav>
        </header>
        <main>
            <slot/>
        </main>      
    </div>

</template>

<script setup>
const firebaseUser = useFirebaseUser();
const logOut = async() => {
        await signOut()
    }
</script>