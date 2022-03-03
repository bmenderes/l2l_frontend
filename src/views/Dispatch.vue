<template>
  <div class="mt-10">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="machines"
            label="Machine Names"
            dense
            v-model="machineName"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <div class="d-flex justify-start ml-4 mt-4">
      <v-btn depressed large color="primary" @click="getOpenDisptaches">
        <span class="mr-2">List</span>
        <v-icon>mdi-format-list-bulleted </v-icon>
      </v-btn>
    </div>
    <div class="d-flex justify-end ml-4 mt-4">
      <v-btn depressed large color="info" @click="dispacthMe">
        <span class="mr-2">Dispatch Me</span>
        <v-icon>mdi-hand-back-right</v-icon>
      </v-btn>
    </div>

    <div>
      <v-data-table
        :headers="headers"
        :items="dispatch"
        item-key="id"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
        show-select
        v-model="selectedRows"
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
    {{ selectedRows }} {{ deneme }}
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      clickmisin: true,
      machineName: "KP10",
      deneme: "portakal",
      selectedRows: [],

      machines: [
        "DA02",
        "DA04",
        "DA07",
        "DK01",
        "EP12",
        "EP13",
        "EP21",
        "EP22",
        "EP23",
        "EP25",
        "EP26",
        "EP29",
        "Hat1",
        "Grup2",
        "Grup3",
        "Grup4",
        "Grup6",
        "H012",
        "H013",
        "H014",
        "H015",
        "H018",
        "Grup5",
        "H700",
        "H730",
        "H730-2",
        "H760",
        "H760-2",
        "H790",
        "H800",
        "H820",
        "H830",
        "H840",
        "H850",
        "H860",
        "HEAT-01",
        "HK01",
        "HK03",
        "K01",
        "K02",
        "K03",
        "K04",
        "K05",
        "K07",
        "K08",
        "K09",
        "K10",
        "K14",
        "K17",
        "K19",
        "K22",
        "K24",
        "K26",
        "K27",
        "K32",
        "KP01",
        "KP02",
        "KP03",
        "KP04",
        "KP05",
        "KP06",
        "KP07",
        "KP09",
        "KP10",
        "KP11",
        "KP12",
        "KP13",
        "KP14",
        "KP15",
        "KP16",
        "KP17",
        "MD1-Ütüleme ve Delik Delme",
        "MK1-Kapak ve Yay Çanak Kaynak",
        "MK1-1 -Kapak ve Yay Çanak Kaynak",
        "MK1-2 -Kapak ve Yay Çanak Kaynak",
        "MK1-3 -Kapak ve Yay Çanak Kaynak",
        "MK1-4-Kapak ve Yay Çanak Kaynak",
        "MK2-Stab Braket Kaynak",
        "MK2-1-Stab Braket Kaynak",
        "MK2-2-Stab Braket Kaynak",
        "MP1- Projeksiyon Kaynak",
        "MS1-Sızdırmazlık Test",
        "MSG1- Soğutma İstasyonu",
        "MÇ1-Boru Markalama ve Kapak Çakma",
        "Ni-Cr Plating",
        "P230 PPMI",
        "P230-2",
        "PC01",
        "PC02",
        "PC03",
        "PC04",
        "PC05",
        "PC06",
        "PC07",
        "PDB1",
        "PM01",
        "PM02",
        "PM05",
        "R200.2",
        "R200.2-1",
        "R200.2-2",
        "R230",
        "R230-2",
        "R230-3",
        "RE01",
        "SERT-KUR1",
      ],
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
        { text: "Action", value: this.deneme },
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
        .get("http://l2l_backend.test/api/dispatch/" + this.machineName, {
          headers: {
            Authorization: `Bearer ${this.$store.state.userToken}`,
          },
        })
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
    dispacthMe() {
      if (this.deneme == "ehehehe") {
        this.deneme = "portakal";
      } else {
        this.deneme = "ehehehe";
      }
    },
  },
  beforeMount() {
    this.getOpenDisptaches();
  },
};
</script>

