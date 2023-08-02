<template>
    <NuxtLayout>
        <div class="flex justify-center items-center mt-52" v-if="!firebaseUser">
            <div class="column is-half is-offset-one-quarter">
                <div class="flex justify-center">
                    <button @click="registerComponent = false" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Login
                    </button>
                    <button @click="registerComponent = true" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Register
                    </button>
                </div>
                <FormAuth                
                    @submit="signIn"
                    :form="formLogin"
                    nameButton="login"
                    v-if="!firebaseUser && !registerComponent"
                />
                <FormAuth               
                    @submit="register"
                    :form="formRegister"
                    nameButton="Registrer"
                    v-if="registerComponent"
                />        
            </div>
        </div>
        <NuxtPage v-if="firebaseUser" />
    </NuxtLayout>
</template>
<script setup>
const firebaseUser = useFirebaseUser();
const formLogin = ref({ email: "", password: "" });
const formRegister = ref({ email: "", password: "" });

const registerComponent = ref(false);


const signIn = async () => {
   await signInUser(formLogin.value.email, formLogin.value.password)
   formLogin.value = { email: "", password: "" };
}

const register = async () => {       
  await createUser(
    formRegister.value.email,
    formRegister.value.password
  );
  formRegister.value = { email: "", password: "" };

};

</script>