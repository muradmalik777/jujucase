<template>
    <v-container class="login">
        <v-layout row justify-center align-center mt-5 pt-5>
            <v-flex xs12 md7 lg5>
                <v-card class="login-card">
                    <h2 class="m-b-2">User Login</h2>
                    <v-form ref="form" id="loginForm">
                        <v-text-field
                        color="#fff"
                        v-model="user.email"
                        label="Email"
                        type="email"
                        :rules="emailRules"
                        required
                        ></v-text-field>
                        <v-text-field
                        class="m-t m-b"
                        color="#fff"
                        v-model="user.password"
                        label="Password"
                        type="password"
                        :rules="passwordRules"
                        required
                        ></v-text-field>
                        <v-btn @click="login" flat outline :loading="loading" color="#fff" right class="m-t-2 login-btn">Login</v-btn>
                        <v-btn flat color="#fff" class="signup-btn" :to="'/register'">Create Account</v-btn>
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
import Api from '@/services/Api'
export default { 
    name: "Login",
    data: function(){
        return{
            user: {
                email: "",
                password: ""
            },
            passwordRules: [v => !!v || "The input is required"],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            loading: false
        }
    },
    methods: {
        login: function(){
            if(this.$refs.form.validate()){
                this.loading = true
                let $object = new Api('/user/login')
                $object.post(this.user).then(resp => {
                    this.$store.commit('addUser', resp)
                    this.$router.push("/")
                    this.loading = false
                }).catch((error) => {
                    this.showMessage(error.response.data.message)
                    this.loading = false
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    height: 75vh;
}
.login-card{
    background: #73337a99;
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
        width: 220px;
        height: 35px;
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
