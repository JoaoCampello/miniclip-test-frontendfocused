<template>
  <div>
    <v-row justify="center" class="ma-4">
      <h2>Moderation Status</h2>
    </v-row>
    <v-divider class="ml-3 mr-3"></v-divider>
    <v-row class="mt-3 ml-4 mr-4 mb-3">
      <v-spacer></v-spacer>
      <submit-dialog />
    </v-row>
    <v-divider class="ml-3 mr-3"></v-divider>
    <v-container fluid>
      <v-layout align-center justify-space-around row fill-height wrap>
        <v-flex v-for="item in api" :key="item.id" xs3>
          <image-card :item="item" /> </v-flex
      ></v-layout>
    </v-container>
  </div>
</template>
<script>
import api from "../api/home_data.json";
import ImageCard from "@/components/Layout/ImageCard.vue";
import SubmitDialog from "@/components/Layout/SubmitDialog.vue";

export default {
  data: () => ({
    api: api,
  }),
  components: {
    ImageCard,
    SubmitDialog,
  },
  mounted() {
    //Get All Media
    try {
      this.$store.dispatch("getAllImages");
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>