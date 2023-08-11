<template>
    <div class="flex flex-col h-screen text-white DefaultLayout">
        <header class="py-5 bg-gray-700 text-white text-right">

            <div class="mr-5" v-if="firebaseUser">
                <button @click="logOut"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log
                    Out</button>
            </div>

        </header>
        <main class="flex-1 overflow-y-auto p-5">
            <slot />
        </main>
    </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const logOut = async () => {
    await signOut()
}
</script>