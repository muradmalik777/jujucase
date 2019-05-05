<template>
    <v-container>
        <v-layout row justify-center mt-5>
            <v-flex xs12 md7 lg5>
                <v-card class="login-card">
                    <h2 class="t-c">User Login</h2>
                    <v-form>
                        <v-text-field
                        color="#fff"
                        v-model="user.email"
                        label="Email"
                        data-vv-name="name"
                        required
                        ></v-text-field>
                        <v-text-field
                        color="#fff"
                        v-model="user.password"
                        label="Password"
                        data-vv-name="email"
                        required=""></v-text-field>
                        <v-btn @click="login" flat outline color="#fff" right class="m-t-2 login-btn">Login</v-btn>
                        <v-btn flat color="#fff" class="p-t signup-btn" :to="'/register'">Create Account</v-btn>
                        <br>
                        <a href="http://localhost:8081/steam">
                            <v-img contain :src="require('@/assets/imgs/steam.png')" class="pointer steam" ></v-img>
                        </a>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: "Login",
    data: function(){
        return{
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login: function(){
            return
        }
    }
}
</script>
<style lang="scss" scoped>
.login-card{
    background: #73337a89;
    min-height: 500px;
    padding: 40px;
    .login-btn{
        margin-left: 1rem;
    }
    .signup-btn{
        text-decoration: underline;
        margin-top: 2rem;
    }
    .steam{
        margin-top: 2rem;
        float: left;
        width: 250px;
        height: 40px;
        box-shadow: 0px 1px 2px rgb(27, 27, 27);
        border-radius: 4px;
    }
}
.email{
    label{
        color: #ffffff;
    }
}
</style>
