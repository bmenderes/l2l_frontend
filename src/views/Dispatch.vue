<template>
  <div class="mt-10">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="machines" label="Machine Names" dense v-model="machineName"></v-select>
        </v-col>
      </v-row>
    </v-container>
     <div class="d-flex justify-start ml-4 mt-4">
      <v-btn depressed large color="primary" @click="getOpenDisptaches">
        List
      </v-btn>
    </div>

    <div >
      <v-data-table
        :headers="headers"
        :items="dispatch"
        item-key="name"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search (UPPER CASE ONLY)"
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
    </div>
    
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      machineName : "KP10",
      machines: ["KP10", "PPMI", "R230-2", "PPMI-2"],
      search: "",
      dispatch: [],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Area Code",
          align: "start",
          sortable: false,
          value: "areacode",
        },
        { text: "Machine Name", value: "linecode" },
        { text: "Dispatch Type", value: "dispatchtype" },
        { text: "Description", value: "description" },
        { text: "Created", value: "created" },
        { text: "Createdby", value: "createdby" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
    getOpenDisptaches() {
      axios
        .get("http://l2l_backend.test/api/dispatch/" + this.machineName)
        .then((response) => {
          this.dispatch = response.data.data;
          //console.log(response.data.data);          
        })
        .catch((error) => {
          console.error(error);
          console.log(error.response.data.message);
          this.loading = false;
          alert("Try again :( \n" + error.response.data.message);
        });
    },
  },
};
</script>

