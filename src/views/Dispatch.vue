<template>
  <div class="mt-10">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="machines" label="Machine Names" dense></v-select>
        </v-col>
      </v-row>
    </v-container>

    <div>
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
export default {
  data() {
    return {
      machines: ["KP10", "PPMI", "R230-2", "PPMI-2"],
      search: "",  
      dispatch: [
      {
            "id": 807993,
            "dispatchnumber": 1096,
            "lineid": 3005,
            "linecode": "KP10",
            "lineabbreviation": "KP10",
            "areacode": "AMG1-Kesim",
            "machineid": 37648,
            "machinecode": "KP10",
            "machinedescription": "KP10",
            "technology": "001",
            "description": "Duruş Andon Tarafından Açıldı. ",
            "machinegroup": null,
            "downtime": 20,
            "open": "T",
            "techniciancount": 0,
            "machinecount": 1,
            "sigdowntime": 240,
            "deleted": "F",
            "tradecode": "Genel",
            "valuestreamcode": "None",
            "externalid": null,
            "created": "2016-10-20 14:41:53",
            "lastupdated": "2016-10-20 15:02:29",
            "createdby": "TPC8151",
            "lastupdatedby": "TPC8151",
            "reported": "2016-10-20 17:41:52",
            "dispatched": null,
            "completed": "2016-10-20 18:02:29",
            "dispatchtype": "001",
            "dispatchtypeid": 618,
            "currentstatus": {
                "dispatchstatus_id": -6,
                "dispatchstatus_description": "Complete"
            },
            "reasoncode": null,
            "shiftreported": "",
            "shiftcompleted": "",
            "technicians": [],
            "assigned_technicians": [],
            "actioncomponents": [],
            "external_costs": []
        },
        {
            "id": 808046,
            "dispatchnumber": 1098,
            "lineid": 3005,
            "linecode": "KP10",
            "lineabbreviation": "KP10",
            "areacode": "AMG1-Kesim",
            "machineid": 37648,
            "machinecode": "KP10",
            "machinedescription": "KP10",
            "technology": "001",
            "description": "Duruş Andon Tarafından Açıldı. ",
            "machinegroup": null,
            "downtime": 12,
            "open": "T",
            "techniciancount": 0,
            "machinecount": 1,
            "sigdowntime": 240,
            "deleted": "F",
            "tradecode": "Genel",
            "valuestreamcode": "None",
            "externalid": null,
            "created": "2016-10-20 18:50:06",
            "lastupdated": "2016-10-20 19:02:17",
            "createdby": "TPC8044",
            "lastupdatedby": "TPC8044",
            "reported": "2016-10-20 21:50:05",
            "dispatched": null,
            "completed": "2016-10-20 22:02:17",
            "dispatchtype": "001",
            "dispatchtypeid": 618,
            "currentstatus": {
                "dispatchstatus_id": -6,
                "dispatchstatus_description": "Complete"
            },
            "reasoncode": null,
            "shiftreported": "",
            "shiftcompleted": "",
            "technicians": [],
            "assigned_technicians": [],
            "actioncomponents": [],
            "external_costs": []
        },
      ],
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
    filterOnlyCapsText(value, search,) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
};
</script>

