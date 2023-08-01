import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    
    const firebaseConfig = {
        apiKey: config.public.apiBase
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    onUser();

    const auth = getAuth();
    nuxtApp.vueApp.provide("auth", auth)
    nuxtApp.provide("auth", auth)
})