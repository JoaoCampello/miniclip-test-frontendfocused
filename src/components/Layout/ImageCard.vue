<template>
  <v-card class="ma-2" :color="card_color">
    <v-img src="https://images.pexels.com/photos/13355514/pexels-photo-13355514.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" stretch max-height="146px"></v-img>
    <v-card-actions @click="show = !show">
      <v-card-text> Status: {{ status }} </v-card-text>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-col>
          <v-card-subtitle
            ><h4>Submitted By:</h4>
            {{ item.user }} <br />
            <p>Date Submitted: {{ item.date_submitted }}</p>
          </v-card-subtitle>
          <v-row class="mb-2" justify="center">
            <v-btn v-if="!item.approved" class="green lighten-1">Approve</v-btn>
            <v-btn v-if="item.approved" class="red lighten-1"
              >Disapprove</v-btn
            ></v-row
          ></v-col
        >
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  props: {
    item: Object,
  },
  computed: {
    card_color() {
      let color = null;
      if (this.item.approved) {
        color = "green lighten-5";
      }
      if (this.item.approved === false) {
        color = "red lighten-4";
      }
      if (this.item.approved === null) {
        color = "yellow lighten-2";
      }
      return color;
    },
    status() {
      let status = null;
      if (this.item.approved) {
        status = "Approved";
      }
      if (!this.item.approved) {
        status = "Disapproved";
      }
      if (this.item.approved === null) {
        status = "Pending";
      }
      return status;
    },
  },
};
</script>