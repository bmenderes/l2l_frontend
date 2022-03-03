<template>
  <v-container>
    <v-form ref="form" @submit.prevent="register">
      <v-card max-width="350">
        <template slot="progress">
          <v-progress-linear
            color="primary"
            height="10"
            indeterminate
            absolute
          ></v-progress-linear>
        </template>

        <v-card-title>Registration</v-card-title>
        <v-card-text>
          <v-text-field v-model="name" label="Name" required></v-text-field>

          <v-text-field
            v-model="email"
            type="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-text-field
            v-model="password_confirmation"
            label="Password (confirmation)"
            type="password"
            required
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn type="submit" color="primary" class="mr-4"> Register </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    token: null,
  }),

  computed: {},

  methods: {
    register() {
      axios
        .post("http://l2l_backend.test/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("setUserLogedIn", response);
          this.$store.commit("setUserToken", response.data.token);
          console.log(this.$store.state.logedInUser.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error);
          } else {
            console.log(error);
          }
        });
    },
  },
};
</script>