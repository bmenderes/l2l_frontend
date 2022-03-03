<template>
  <v-app>
    <v-app-bar app color="primary" dark>    
      <div class="d-flex align-center">
        <v-btn text to="/">
          <v-img
            to="/"
            alt="Vuetify Name"
            :class="`rounded-xl`"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="../src/assets/a-autoliv.gif"
            width="140"
          />
        </v-btn>
      </div>

      <v-btn to="Dispatch" class="ml-10" text>
        <span class="mr-2">Dispatch</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn to="Register" class=" ml-10" text>
        <span class="mr-2">Register</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
     
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
