<template>
    <v-container>
        <v-layout row justify-center mt-5 pt-5>
            <v-flex xs12 md7 lg5>
                <v-card class="login-card">
                    <h2 class="m-b-2">User Signup</h2>
                    <v-form ref="form">
                        <v-text-field
                        color="#fff"
                        v-model="user.user_name"
                        label="Full Name"
                        type="text"
                        :rules="nameRules"
                        required
                        ></v-text-field>
                        <v-text-field
                        color="#fff"
                        v-model="user.email"
                        label="Email"
                        type="email"
                        :rules="emailRules"
                        required
                        ></v-text-field>
                        <v-text-field
                        color="#fff"
                        v-model="user.password"
                        type="password"
                        label="Password"
                        :rules="passwordRules"
                        required
                        ></v-text-field>
                        <v-btn @click="submit" dark outline color="#fff" right class="m-t-2 signup-btn">Signup</v-btn>
                        <p class="c-white">Already have an account <v-btn flat color="#fff" class="login-btn" :to="'/login'">Login</v-btn></p>
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
                user_name: "",
                email: "",
                password: ""
            },
            passwordRules: [v => !!v || "The input is required"],
            nameRules: [v => !!v || "The input is required"],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ]
        }
    },
    methods: {
        submit: function(){
            if(this.$refs.form.validate()){
                let $object = new Api('/user/register')
                $object.post(this.user).then(resp => {
                    this.$store.commit('addUser', resp)
                    this.$router.push("/")
                })
            }
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
        text-decoration: underline;
        margin-bottom: 0.6rem;
    }
    .signup-btn{
        margin-left: 1rem;
    }
}
.email{
    label{
        color: #ffffff;
    }
}
</style>
