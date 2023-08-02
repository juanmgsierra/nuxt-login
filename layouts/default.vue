<template>
    <div >
        <header class="bg-gray-200">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">    
                <div class="hidden lg:flex lg:flex-1 lg:justify-end" v-if="firebaseUser" >
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